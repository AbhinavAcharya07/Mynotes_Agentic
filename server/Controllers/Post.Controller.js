import postModel from "../Models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { topic, question, answer } = req.body;
    const responseData = await postModel.create({ topic, question, answer });
    res.send({ success: true, responseData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const responseData = await postModel.find();
    res.send({ success: true, responseData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { postId } = req.query;
    const responseData = await postModel.findById(postId);
    res.send({ success: true, responseData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const responseData = await postModel.findByIdAndDelete(postId);
    res.send({ success: true, responseData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId, topic, question, answer } = req.body;
    const responseData = await postModel.findByIdAndUpdate(
      postId,
      { topic, question, answer },
      { new: true }
    );
    res.send({ success: true, responseData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

export { createPost, getAllPosts, getSinglePost, deletePost, updatePost };