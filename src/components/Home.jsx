// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToNewCollection = () => {
    navigate("/new-collection");
  };

  const goToMyCollections = () => {
    navigate("/my-collections");
  };

  return (
    <div className="container">
      <h1>Welcome to the Book Library</h1>
      <button onClick={goToNewCollection}>New Collection</button>
      <button onClick={goToMyCollections}>My Collections</button>
    </div>
  );
};

export default Home;
