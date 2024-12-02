import React from "react";

const DownloadedBooks = ({ archive, removeFromArchive }) => {
  return (
    <div className="container">
      <h1>Downloaded Books</h1>
      {archive.length === 0 ? (
        <p>No books downloaded yet!</p>
      ) : (
        <div className="grid-container">
          {archive.map((book) => (
            <div key={book.key} className="card">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <button
                className="favorite-button"
                onClick={() => removeFromArchive(book.key)}
              >
                Remove from Downloaded Books
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DownloadedBooks;
