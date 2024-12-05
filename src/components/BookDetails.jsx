import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.book) {
    return <p>No book details available.</p>;
  }

  const { book } = state;

  // Fallback values for missing data
  const coverImageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/300x400?text=No+Cover+Available";
  const authors = book.author_name ? book.author_name.join(", ") : "Unknown";
  const firstPublishYear = book.first_publish_year || "Unknown";
  const subjects = book.subject ? book.subject.join(", ") : "Not available";

  return (
    <div className="container" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h1>{book.title}</h1>
      <img
        src={coverImageUrl}
        alt={`Cover of ${book.title}`}
        style={{ maxWidth: "300px", marginBottom: "20px" }}
      />
      <p>
        <strong>Author(s):</strong> {authors}
      </p>
      <p>
        <strong>First Published:</strong> {firstPublishYear}
      </p>
      <p>
        <strong>Subjects:</strong> {subjects}
      </p>
      <p>
        <strong>Key:</strong> {book.key}
      </p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/new-collection")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back to New Collection
        </button>
        <button
          onClick={() => navigate("/home")}
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
