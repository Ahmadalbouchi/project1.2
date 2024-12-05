import React, { useState } from "react";

const Search = ({ onSelectBook }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchBooks = async () => {
    if (!searchTerm) return;

    // Clear previous results and reset states
    setResults([]);
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books.");
      }

      const data = await response.json();

      const processedResults = data.docs.map((book) => ({
        key: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "Unknown",
      }));

      setResults(processedResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
        }}
      />
      <button
        onClick={searchBooks}
        style={{
          marginBottom: "20px",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {results.length === 0 && !loading && !error && <p>No books found.</p>}
      {results.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {results.map((book) => (
            <li
              key={book.key}
              onClick={() => onSelectBook(book)}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            >
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
