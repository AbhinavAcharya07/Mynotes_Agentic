import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
} from "../Controllers/Post.Controller.js";
import { askGemini } from "../Controllers/Gemini.Controller.js";

const router = express.Router();

router.post("/createpost", createPost);
router.get("/getallposts", getAllPosts);
router.get("/getsinglepost", getSinglePost);
router.delete("/deletepost", deletePost);
router.put("/updatepost", updatePost);
router.post("/askgemini", askGemini);

export default router;