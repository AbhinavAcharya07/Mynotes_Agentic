import React from "react";
import Card from "./Card";
import CardShimmer from "./CardShimmer";
import "./Home.css";
import { ModeSwitcher } from "../../contextProvider";
import { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const { color } = useContext(ModeSwitcher);
  const [posts, setposts] = useState([]);
  const BackEndUrl = import.meta.env.VITE_BACKEND;
  const getPost = async () => {
    try {
      const response = await axios.get(`${BackEndUrl}/getallposts`);
      setposts(response.data.responseData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className={color === "white" ? "Main-Wte" : "Main-Blk"}>
      <h1>WELCOME</h1>
      {!posts.length ? (
        <CardShimmer></CardShimmer>
      ) : (
        <div className="card-grid">
          {posts?.map((post) => {
            return <Card key={post?._id} post={post}></Card>;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
