import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Details from "./pages/Details";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route
          path="/"
          element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
