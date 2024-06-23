import React from "react";
import { Link } from "react-router-dom";

function NavLinks({ name, drop }) {
  return (
    <Link className="flex items-center hover:text-purple-300 transition-all">
      <p className="font-medium text-lg">{name}</p>
      {drop && (
        <img
          src="src/assets/long-rarr.png"
          alt=""
          className="rotate-90 w-4 hover:-rotate-180 transition-all hover:ml-1"
        />
      )}
    </Link>
  );
}

export default NavLinks;
