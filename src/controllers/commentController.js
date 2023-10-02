const Comments = require('../models/CommentsWithQuestion')
const User = require("../models/User");

const getCommentQuestion = async (req, res) => {
    const userId = req.userId;
    const user = await User.findOne({ _id: userId });

    const id = req.params.id
    const findQuestion = await Comments.findById(id)

    try {
        if (!user) {
            throw new Error("User not found");
        }
        const result = findQuestion.usercomments;
        res.status(200).json({ result });
    } catch (error) {
        console.error("Error fetching scores:", error);
        res.status(500).json({ message: "Error fetching scores" });
    }
};

const submitComment = async (req, res) => {
    const userId = req.userId;
    const { user } = req;
    const { comment } = req.body;

    try {
        const id = req.params.id
        const user = await User.findOne({ _id: userId });
        const findQuestion = await Comments.findOne({ _id: id });
        const post = await Comments.findByIdAndUpdate({ _id: id }, { $inc: { view: 1 } }, { new: true });
        // console.log(findQuestion)

        // console.log("id", id)
        const questionuser = user.username

        console.log("questionuser", questionuser)

        const commentEntry = {
            usercomment: questionuser,
            comment: comment,
        };

        findQuestion.usercomments.push(commentEntry);
        // console.log("commentEntry", commentEntry)

        await findQuestion.save()
        
            .then(result => {
                res.status(201).json({ post })
            })
    } catch (error) {
        console.error("Error fetching scores:", error);
        res.status(500).json({ message: "Error fetching scores" });
    }
}

const getComment = async (req, res) => {
    try {
        const recentData = await Comments.find().exec();
        res.status(200).json({ recentData });
    } catch (error) {
        console.error("Error fetching scores:", error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { getCommentQuestion, submitComment, getComment }