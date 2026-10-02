import React from "react";
import "./Card.css";
import { ModeSwitcher } from "../../contextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ post }) => {
  const { color } = useContext(ModeSwitcher);
  const navigate = useNavigate();

  return (
    <div
      className={color === "white" ? "card-Wte" : "card-Blk"}
      onClick={() => {
        navigate(`/singlepost/${post?._id}`);
      }}
    >
      <div className="cardH2">
        <h2 className="card-topic">{post?.topic}</h2>
      </div>
      <div className="card-content">
        <p className="card-question">{post?.question}</p>
        <p className="card-answer">{post?.answer}</p>
      </div>
    </div>
  );
};

export default Card;
