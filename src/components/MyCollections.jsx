import React from "react";

const MyCollection = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="container">
      <h1>My Collection</h1>
      {favorites.length === 0 ? (
        <p>No favorite books added yet!</p>
      ) : (
        <div className="grid-container">
          {favorites.map((book) => (
            <div key={book.key} className="card">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <button
                className="favorite-button"
                onClick={() => removeFromFavorites(book.key)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollection;
