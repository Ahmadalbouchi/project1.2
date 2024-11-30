/*import React, { useEffect, useState } from "react";
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
      <button
        className="my-collection-button"
        onClick={() => navigate("/my-collection")}
      >
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
            <button
              className="favorite-button"
              onClick={() => addToFavorites(book)}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;*/

/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCollection = ({ addToFavorites, addToArchive }) => {
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
      <button
        className="my-collection-button"
        onClick={() => navigate("/my-collection")}
      >
        Go to My Collection
      </button>
      <button
        className="my-collection-button"
        onClick={() => navigate("/archive")}
      >
        Go to Archive
      </button>
      <button
  className="my-collection-button"
  onClick={() => navigate("/downloaded-books")}
>
  Downloaded Books
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
            <button
              className="favorite-button"
              onClick={() => addToFavorites(book)}
            >
              Add to Favorites
            </button>
            <button
              className="archive-button"
              onClick={() => addToArchive(book)}
            >
              Send to Archive
            </button>
            <button
              className="archive-buttonn"
              onClick={() => addToDownloadedBooks(book)}
              >
                Download Book
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;*/


/*
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCollection = ({ addToFavorites, addToArchive, addToDownloadedBooks }) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks(); // Initial load of books
  }, []);

  const fetchBooks = (subject = "love") => {
    fetch(`https://openlibrary.org/subjects/${subject}.json?limit=20`)
      .then((response) => response.json())
      .then((data) => setBooks(data.works || []))
      .catch((error) => console.error("Error fetching books:", error));
  };

  const handleBookClick = (book) => {
    navigate(`/book-details`, { state: { book } }); // Navigate to book details
  };

  const handleGenerateNewBooks = () => {
    const subjects = ["love", "science", "history", "art", "fiction"];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    fetchBooks(randomSubject); // Fetch books from a random subject
  };

  return (
    <div className="container">
      <h1>New Collection</h1>
      <button
        className="my-collection-button"
        onClick={() => navigate("/my-collection")}
      >
        Go to My Collection
      </button>
      <button
        className="my-collection-button"
        onClick={() => navigate("/archive")}
      >
        Go to Archive
      </button>
      <button
        className="my-collection-button"
        onClick={() => navigate("/downloaded-books")}
      >
        Downloaded Books
      </button>
      <button
        className="generate-button"
        onClick={handleGenerateNewBooks}
      >
        Generate New Books
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
            <button
              className="favorite-button"
              onClick={() => addToFavorites(book)}
            >
              Add to Favorites
            </button>
            <button
              className="archive-button"
              onClick={() => addToArchive(book)}
            >
              Send to Archive
            </button>
            <button
              className="archive-buttonn"
              onClick={() => addToDownloadedBooks(book)}
            >
              Download Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;*/

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCollection = ({ addToFavorites, addToArchive, addToDownloadedBooks }) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks(); // Initial load of books
  }, []);

  const fetchBooks = (subject = "love") => {
    fetch(`https://openlibrary.org/subjects/${subject}.json?limit=20`)
      .then((response) => response.json())
      .then((data) => setBooks(data.works || []))
      .catch((error) => console.error("Error fetching books:", error));
  };

  const handleBookClick = (book) => {
    navigate(`/book-details`, { state: { book } }); // Navigate to book details
  };

  const handleGenerateNewBooks = () => {
    const subjects = ["love", "science", "history", "art", "fiction"];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    fetchBooks(randomSubject); // Fetch books from a random subject
  };

  return (
    <div className="container">
      <h1>New Collection</h1>
      <div className="button-container">
        <button
          className="my-collection-button"
          onClick={() => navigate("/my-collection")}
        >
          Go to My Collection
        </button>
        <button
          className="my-collection-button"
          onClick={() => navigate("/archive")}
        >
          Go to Archive
        </button>
        <button
          className="my-collection-button"
          onClick={() => navigate("/downloaded-books")}
        >
          Downloaded Books
        </button>
        <button
          className="generate-button"
          onClick={handleGenerateNewBooks}
        >
          Generate New Books
        </button>
      </div>

      <div className="home-page-button-container">
        <button
          className="home-page-button"
          onClick={() => navigate("/home")}
        >
          Go to Home Page
        </button>
      </div>

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
            <button
              className="favorite-button"
              onClick={() => addToFavorites(book)}
            >
              Add to Favorites
            </button>
            <button
              className="archive-button"
              onClick={() => addToArchive(book)}
            >
              Send to Archive
            </button>
            <button
              className="archive-buttonn"
              onClick={() => addToDownloadedBooks(book)}
            >
              Download Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
