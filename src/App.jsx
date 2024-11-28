import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NewCollection from "./components/NewCollection";
import BookDetails from "./components/BookDetails";
import MyCollection from "./components/MyCollections";

import logo from "./components/logo.png"; // Use the correct path to your logo file.
import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.key === book.key)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFromFavorites = (key) => {
    setFavorites(favorites.filter((book) => book.key !== key));
  };

  return (
    <Router>
      <div className="app">
        {/* Add the logo globally */}
        <header className="app-header">
          
        </header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/new-collection"
            element={<NewCollection addToFavorites={addToFavorites} />}
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
          <Route path="/book-details" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
