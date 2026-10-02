import React from "react";
import "./SinglePost.css";
import { ModeSwitcher } from "../../contextProvider";
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const SinglePost = () => {
  const { color } = useContext(ModeSwitcher);
  const { postId } = useParams();
  console.log(postId);
  const [post, setpost] = useState();
  const navigate = useNavigate();
  const BackEndUrl = import.meta.env.VITE_BACKEND;

  const getPost = async () => {
    try {
      const response = await axios.get(
        `${BackEndUrl}/getsinglepost?postId=${postId}`
      );
      setpost(response.data.responseData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  const deletePost = async () => {
    try {
      const response = await axios.delete(`${BackEndUrl}/deletepost?postId`, {
        data: {
          postId,
        },
      });
      if (response.data.responseData) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={
        color === "white"
          ? "singlePostContainer-Wte"
          : "singlePostContainer-Blk"
      }
    >
      <div
        className={
          color === "white" ? "singlePostCard-Wte" : "singlePostCard-Blk"
        }
      >
        <h1>{post?.topic}</h1>
        <h2>{post?.question}</h2>
        <p
          className={
            color === "white" ? "singlePostCardP-Wte" : "singlePostCardP-Blk"
          }
        >
          {post?.answer}
        </p>
        <div className="buttons">
          <button id="deletebtn" onClick={deletePost}>
            Delete
          </button>
          <button
            id="editbtn"
            onClick={() => navigate(`/updatepost/${postId}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
