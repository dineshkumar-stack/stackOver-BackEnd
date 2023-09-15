const User = require("../models/User");

const getUserComments = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error("User not found");
    }
    const question = user.question;

    res.status(200).json({ question });
  } catch (error) {
    console.error("Error fetching scores:", error);
    res.status(500).json({ message: "Error fetching scores" });
  }
};


const submitComments = async (req, res) => {
  const userId = req.userId;

  const { user } = req;
  const { title, content, tag, view, vote } = req.body;

  console.log(user);

  try {
    const user = await User.findOne({ _id: userId });
    const questionuser = user.username

    if (!user) {
      throw new Error("User not found");
    }
    const commentEntry = {
      questionuser: questionuser,
      title: title,
      content: content,
      tag: tag,
      view: view,
      vote: vote
    };

    user.question.push(commentEntry);

    await user.save();

    res.status(201).json({ message: "Score recorded successfully" });
  } catch (error) {
    console.error("Error recording score:", error);
    res.status(500).json({ message: "Error recording score" });
  }
}

const userQuestionSubmit =async (req, res) => {

  const userId = req.userId;

  const { user } = req;
  const { comment } = req.body;

  console.log(user);

  try {
    const user = await User.findOne({ _id: userId });
    const usercomment = user.username

    if (!user) {
      throw new Error("User not found");
    }
    const commentEntry = {
      usercomment: usercomment,
      comment: comment
    };

    user.question.push(commentEntry);

    await user.save();

    res.status(201).json({ message: "Score recorded successfully" });
  } catch (error) {
    console.error("Error recording score:", error);
    res.status(500).json({ message: "Error recording score" });
  }
  

}


module.exports = { getUserComments, submitComments, userQuestionSubmit };
