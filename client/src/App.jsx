import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import CreatePost from "./Pages/CreatePost/CreatePost";
import { Route, Routes } from "react-router-dom";
import SinglePost from "./Pages/SinglePost/SinglePost";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/createPost" element={<CreatePost />}></Route>
        <Route
          path="/singlepost/:postId"
          element={<SinglePost></SinglePost>}
        ></Route>
        <Route
          path="/updatepost/:postId"
          element={<CreatePost></CreatePost>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;