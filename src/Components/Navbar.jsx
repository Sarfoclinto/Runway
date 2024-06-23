import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function Navbar({ modal, setModal }) {
  return (
    <header className="text-white flex w-full items-center justify-between px-3 py-2 mb-24 backdrop-blur-lg">
      <div id="logo" className="text-2xl font-semibold">
        <span className="text-blue-500 font-bold">R</span>un
        <span className="text-blue-500 font-bold">W</span>ay
      </div>

      <nav className="w-3/5 flex justify-center gap-7">
        <NavLinks name="Research" drop={true} />
        <NavLinks name="Product" drop={true} />
        <NavLinks name="Studios" drop={true} />
        <NavLinks name="Customers" />
        <NavLinks name="Pricing" />
        <NavLinks name="Company" drop={true} />
      </nav>

      <div className=" flex gap-5 items-center">
        <Link className="hover:font-medium hover:bg-black/30 rounded-lg px-3 p-1">
          <button
            onClick={() => {
              setModal(() => {
                return {
                  mode: "signin",
                  active: true,
                };
              });
            }}
          >
            LOG IN
          </button>
        </Link>
        <Link className="bg-blue-600 px-6 rounded-2xl text-base font-medium hover:bg-blue-400 active:text-black/40 py-1">
          <button
            onClick={() => {
              setModal(() => {
                return {
                  mode: "signup",
                  active: true,
                };
              });
            }}
          >
            Sign Up - It's free
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
