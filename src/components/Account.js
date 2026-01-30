import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getUser();
    }
    // eslint-disable-next-line
  }, []);

  const getUser = async () => {
    const response = await fetch("http://localhost:8000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setUser(json);
  };

  return (
    <div className="container mt-4">
      <h2>My Account</h2>

      {user && (
        <div className="card mt-3 p-3">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Account Created:</strong>{" "}
            {new Date(user.date).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Account;
