import React from "react";
import "./CreatePost.css";
import { ModeSwitcher } from "../../contextProvider";
import { useContext } from "react";
import Gemini from "./Gemini";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreatePost = () => {
  const { color } = useContext(ModeSwitcher);
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const { postId } = useParams();
  const BackEndUrl = import.meta.env.VITE_BACKEND;
  const getPost = async () => {
    try {
      const response = await axios.get(
        `${BackEndUrl}/getsinglepost?postId=${postId}`
      );
      const post = response.data.responseData;
      setTopic(post?.topic);
      setQuestion(post?.question);
      setAnswer(post?.answer);
      console.log(post?.topic);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (postId) {
        const response = await axios.put(`${BackEndUrl}/updatepost`, {
          postId,
          topic,
          question,
          answer,
        });
        if (response?.data.responseData) {
          navigate(`/singlepost/${postId}`);
        }
      } else {
        const response = await axios.post(`${BackEndUrl}/createpost`, {
          topic,
          question,
          answer,
        });
        if (response?.data.responseData) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(response);
  };
  return (
    <div className={color === "white" ? "CreatePost-Wte" : "CreatePost-Blk"}>
      <div className={color === "white" ? "LeftSide-Wte" : "LeftSide-Blk"}>
        <Gemini className="GeminiMain"></Gemini>
      </div>
      <div className={color === "white" ? "Post-Wte" : "Post-Blk"}>
        <h1>Create Post</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className={color === "white" ? "topic-Wte" : "topic-Blk"}
            placeholder="Topic"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          <input
            type="text"
            className={color === "white" ? "question-Wte" : "question-Blk"}
            placeholder="Question"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <textarea
            className={color === "white" ? "answer-Wte" : "answer-Blk"}
            rows="5"
            placeholder="Answer"
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          ></textarea>
          <div>
            <button
              type="submit"
              value="Send"
              className={color === "white" ? "submitWhite" : "submitBlack"}
            >
              {postId ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className={color === "white" ? "RightSide-Wte" : "RightSide-Blk"}>
        <Gemini className="Gemini"></Gemini>
      </div>
    </div>
  );
};

export default CreatePost;
