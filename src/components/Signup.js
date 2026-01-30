import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ showAlert }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match check
    if (credentials.password !== credentials.cpassword) {
      showAlert("Passwords do not match", "warning");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        },
      );

      const json = await response.json();

      if (json.authtoken) {
        localStorage.setItem("token", json.authtoken);
        showAlert("Account created successfully", "success");
        navigate("/");
      } else {
        showAlert(json.error || "Invalid details", "danger");
      }
    } catch (error) {
      showAlert("Server error. Please try again later.", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-3">
      <h2>Create an Account to use iNoteBook</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={onChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            autoComplete="email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            autoComplete="new-password"
            minLength={5}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            onChange={onChange}
            autoComplete="new-password"
            minLength={5}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={credentials.password !== credentials.cpassword}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
