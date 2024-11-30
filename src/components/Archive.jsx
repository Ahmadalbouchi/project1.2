import React from "react";

const Archive = ({ archive, removeFromArchive }) => {
  return (
    <div className="container">
      <h1>Archive</h1>
      {archive.length === 0 ? (
        <p>No books added to the archive yet!</p>
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
                Remove from Archive
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
