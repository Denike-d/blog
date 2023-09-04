import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Nav({ isAuth, setIsAuth }) {
  const signoutUser = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  const navigate = useNavigate();

  function home() {
    navigate("");
  }

  return (
    <div>
      <nav className="flex my-4 mx-12 justify-between">
        <p>My logo</p>
        <div className="flex gap-8">
          <p className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </p>
          <p className="cursor-pointer" onClick={() => navigate("/create")}>
            Create a post
          </p>
          {/* {isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={signoutUser}>Logout</button>
          )} */}
        </div>
      </nav>
    </div>
  );
}
