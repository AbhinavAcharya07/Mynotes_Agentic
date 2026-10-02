import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import express from "express";
import cors from "cors";
import CreatePost from "./Routes/Post.Route.js";
import { connectionWithMongoose } from "./db/connection1.db.js";

const app = express();
connectionWithMongoose();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://mynotes-agentic.vercel.app",
      "https://mynotes-agentic.vercel.app/"
    ],
  })
);
app.use(express.json());
app.use("/api", CreatePost);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});