import React from "react";
import { Link } from "react-router-dom";

function Foots({ title, link }) {
  return (
    <div
      id="foots"
      className="flex flex-col w-1/5 gap-5 text-stone-500 hover:shadow-lg cursor-pointer"
    >
      <h3 className="w-4/5 text-base capitalize">{title}</h3>
      <Link>{link}</Link>
    </div>
  );
}

export default Foots;
