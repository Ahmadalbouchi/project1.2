import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCollection = ({ addToFavorites }) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch books from Open Library API
    fetch("https://openlibrary.org/subjects/love.json?limit=20")
      .then((response) => response.json())
      .then((data) => setBooks(data.works || []))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleBookClick = (book) => {
    navigate(`/book-details`, { state: { book } }); // Navigate to book details
  };

  return (
    <div className="container">
      <h1>New Collection</h1>
      <button className="my-collection-button" onClick={() => navigate("/my-collection")}>
        Go to My Collection
      </button>
      <div className="grid-container">
        {books.map((book) => (
          <div className="card" key={book.key}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              alt={book.title}
              onClick={() => handleBookClick(book)}
              style={{ cursor: "pointer" }}
            />
            <h3>{book.title}</h3>
            <p>By: {book.authors?.map((author) => author.name).join(", ")}</p>
            <button className="favorite-button" onClick={() => addToFavorites(book)}>
              Add to Favorites
            </button>
            <button className="Download-button" onClick={() => addToFavorites(book)}>
            Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
