import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";

export default function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    logInWithEmailAndPassword(email, password);
    setIsAuth(true);
    navigate("/");
  };

  //   useEffect(() => {
  //     if (user) {
  //       navigate("/home");
  //     }
  //   }, [user]);

  return (
    <div>
      <div className="">
        <div className="checkout-form">
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Password</label>
            <input
              type="password"
              id="phone"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={login} className="paystack-button">
            Login
          </button>
          <h5>
            Dont have an account <Link to="/register">Register</Link>
          </h5>
        </div>
      </div>
      <div></div>
    </div>
  );
}
