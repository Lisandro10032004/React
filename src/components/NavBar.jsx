import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>Ecommerce</h1>
      <li>
      <Link to = {`/category/${"product"}`}>
        <a href="#">CAT 1</a>
        </Link>
      </li>
      <li>
        <Link to = {`/category/${"product"}`}>
        <a href="#">CAT 2</a>
        </Link>
      </li>
    </div>
  );
};

export default NavBar;
