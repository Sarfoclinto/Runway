import React from "react";
import UpInputs from "./UpInputs";

function SignUp() {
  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="shadow flex flex-col items-center justify-center px-24 py-16 "
    >
      <UpInputs label="Name" placeholder="Enter your name" img="account" />
      <UpInputs
        label="Email"
        placeholder="Enter your email address"
        img="mail"
      />
      <UpInputs
        label="Password"
        placeholder="Enter your password"
        img="password"
      />
      <p className="text-stone-500 self-start mb-5">
        Must be at least 8 characters
      </p>
      <button className="text-white  bg-blue-700 w-80 text-lg p-1 rounded-md cursor-pointer relative">
        Create Account
        <div className="absolute bg-[#101015]/80 rounded font-normal text-base p-1 py-0 right-1/2 -bottom-10">
          or
        </div>
      </button>
      <hr className="border w-10/12 my-7 border-[#101015]/80" />
      <button className="border border-stone-800 cursor-pointer py-1 w-80 text-lg rounded-lg mb-3 flex items-center justify-center gap-3">
        <img src="src/assets/google.png" alt="" />
        <p className="text-white">Sign up with Google</p>
      </button>
      <button className="border border-stone-800 cursor-pointer py-1 w-80 text-lg rounded-lg flex items-center justify-center gap-3">
        <img src="src/assets/facebook.png" alt="" />
        <p className="text-white">Sign up with Facebook</p>
      </button>
    </form>
  );
}

export default SignUp;
