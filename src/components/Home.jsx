import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({favorites, archive, onSelectBook}) => {
  const navigate = useNavigate();

  const handleSelectBook = (book) =>{
    navigate("/book-details", {state: {book}});
  };
  const goToNewCollection = () => {
    navigate("/new-collection");
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
