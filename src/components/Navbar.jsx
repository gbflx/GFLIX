import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMovie, MdOutlineSearch } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [Search, Setsearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Search) return;

    navigate(`/Search?q=${Search}`);
    Setsearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <MdMovie />
          GFLIX
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque seu filme favorito!"
          onChange={(e) => Setsearch(e.target.value)}
        />
        <button type="submit">
          <MdOutlineSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
