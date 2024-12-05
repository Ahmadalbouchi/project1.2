import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NewCollection from "./components/NewCollection";
import BookDetails from "./components/BookDetails";
import MyCollection from "./components/MyCollections";
import Archive from "./components/Archive"; // Import the new Archive page

import logo from "./components/logo.png"; // Corrected: removed the duplicate import
import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [archive, setArchive] = useState([]);

  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.key === book.key)) {
      setFavorites([...favorites, book]);
    }
  };

  const addToArchive = (book) => {
    if (!archive.some((arch) => arch.key === book.key)) {
      setArchive([...archive, book]);
    }
  };

  const removeFromFavorites = (key) => {
    setFavorites(favorites.filter((book) => book.key !== key));
  };

  const removeFromArchive = (key) => {
    setArchive(archive.filter((book) => book.key !== key));
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header"></header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/new-collection"
            element={
              <NewCollection
                addToFavorites={addToFavorites}
                addToArchive={addToArchive}
              />
            }
          />
          <Route
            path="/my-collection"
            element={
              <MyCollection
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
          <Route
            path="/archive"
            element={
              <Archive archive={archive} removeFromArchive={removeFromArchive} />
            }
          />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
