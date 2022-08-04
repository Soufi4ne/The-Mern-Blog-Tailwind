import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-blue-700 border-b-4 text-center fixed top-0 bg-blue-600 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8">
            Articles
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
