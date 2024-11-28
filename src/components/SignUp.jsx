import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add sign-up logic here (e.g., API integration)
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Sign Up</h1>
        <div className="login-form">
          <input
            type="text"
            placeholder="Full Name"
            className="login-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
          />
          <button className="login-button" onClick={handleSignUp}>
            Create Account
          </button>
          <p className="signup-message">
            Already have an account?{" "}
            <span
              className="signup-link"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
