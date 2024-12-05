// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Home = ({favorites, archive, onSelectBook}) => {
  const navigate = useNavigate();

  const handleSelectBook = (book) =>{
    navigate("/book-details", {state: {book}});
  };
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

      <Search onSelectBook={handleSelectBook} />

    </div>
  );
};

export default Home;
