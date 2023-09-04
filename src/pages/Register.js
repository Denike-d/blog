import React, { useState } from "react";
import { auth, registerWithEmailAndPassword } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const [user, loading, error] = useAuthState(auth);

  const register = () => {
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <div>
      <div className="payment">
        <div className="checkout-form">
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button onClick={register} className="paystack-button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
