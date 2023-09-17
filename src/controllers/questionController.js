const User = require("../models/User");
const Note = require('../models/Question')
const Comments = require('../models/CommentsWithQuestion')


const getUserQuestion = async (req, res) => {
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

const submitQuestion = async (req, res) => {
  const userId = req.userId;

  const { user } = req;
  const { title, content, tag, view, vote } = req.body;

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
    const note = new Note(commentEntry);
    const newCom = new Comments(commentEntry)

    user.question.push(commentEntry)
    await user.save();
    await note.save();
    await newCom.save();



    res.status(201).json({ message: "Score recorded successfully" });
  } catch (error) {
    console.error("Error recording score:", error);
    res.status(500).json({ message: "Error recording score" });
  }
}

const userQuestionSubmit = async (req, res) => {
  const userId = req.userId;
  const { user } = req;

  const id = req.params.id
  const { comment } = req.body;

  try {
    const user = await User.findOne({ _id: userId });

    const questionuser = user.username
    console.log(questionuser)

    // const main =  new user.question
    console.log(id)

    const question = user.question

    const newadd = await User.findOne({ _id: id });

    res.json({ newadd })

    console.log(newadd)
    const updatedResult = await newadd.findByIdAndUpdate(
      { _id: id },
      {
        questionuser: questionuser,
        comment: comment,
      }
    );

    console.log(updatedResult);
  } catch (error) {
    console.log(error);
  }
}

const getUserQuestionSubmit = async (req, res) => {
  const userId = req.userId;
  const { user } = req;

  const id = req.params.id;
  try {

    const user = await User.findOne({ _id: userId });
    const main =  await user.question.findOne({ _id: id });

    main.findById(id)
      .then((note) => {

        if (!note) {
          return res.status(404).json({ error: 'Note Not Found' });
        }

        res.json(note)
      })
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Error on connection' })
  }

}

module.exports = { getUserQuestion, submitQuestion, userQuestionSubmit, getUserQuestionSubmit };
