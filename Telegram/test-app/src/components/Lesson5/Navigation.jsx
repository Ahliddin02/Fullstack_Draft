import React from "react";
import Home from "./Home";
import Login from "./Login";
import Posts from "./Posts";
import Users from "./Users";
import { Link, Routes, Route } from "react-router-dom";

export default function Navigation() {
  function removeLocal() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div>
      <ul className="navigation">
        <li>
          <Link to={"/"} style={{ textDecoration: "none", fontSize: "20px", color: "#FFFFFF" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/posts"} style={{ textDecoration: "none", paddingLeft: 30, fontSize: "20px", color: "#FFFFFF" }}>
            Posts
          </Link>
        </li>
        <li>
          <Link to={"/users"} style={{ textDecoration: "none", paddingLeft: 30, fontSize: "20px", color: "#FFFFFF" }}>
            Users
          </Link>
        </li>
        <li>
          <Link to={"/login"} style={{ textDecoration: "none", paddingLeft: 30, fontSize: "20px", color: "#FFFFFF" }}>
            Login
          </Link>
        </li>
        <button
          onClick={removeLocal}
          style={{
            textDecoration: "none",
            marginLeft: 30,
            background: "none",
            width: "80px",
            height: "35px",
            borderRadius: "10px",
            fontSize: "15px",
            color: "#FFFFFF",
            border: "#FFFFFF 1px solid",
          }}
        >
          Log of
        </button>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}
