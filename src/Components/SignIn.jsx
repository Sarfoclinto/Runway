import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn({ closemodal }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email.length) {
        throw new Error("Email field can't be empty");
        setPassword("");
        setEmail("");
      } else if (password.length < 8) {
        setPassword("");
        setEmail("");
        throw new Error("Password can't be less 8 figures");
      } else {
        setError(null);
        console.log({ email, password });
        console.log("signed in sucessfull");
        await closemodal();
        () => {
          alert("signed in sucessfull");
        };
      }
    } catch (error) {
      setError(error.message);
    }
    error && console.log(error);
  };
  return (
    <div className="shadow flex flex-col items-center gap-14 justify-center px-24 py-16 ">
      <div id="logo" className="flex items-center gap-3 ">
        <div className="bg-purple-900 w-fit h-fit p-2 rounded-xl">
          <div className="bg-black rotate-45 h-5 w-5 rounded"></div>
        </div>
        <p className="font-medium text-white letter-spacing-md text-2xl">
          SignIn
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center gap-2"
      >
        <button className="  w-72 h-10 text-white bg-[#eb02e9] rounded-lg cursor-pointer">
          <Link>
            <img src="" alt="" />
            <p>Sign in with Google</p>
          </Link>
        </button>
        <button className=" w-72 h-10 text-black bg-white rounded-lg cursor-pointer">
          <Link>
            <img src="" alt="" />
            <p>Sign in with Apple</p>
          </Link>
        </button>
        <p className="text-stone-950 font-medium">or</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(() => e.target.value)}
          autoFocus
          name="email"
          placeholder="you@example.com"
          className=" w-72 h-10 text-white bg-[#2e2e2e] rounded-lg pl-5 outline-none"
          style={{
            boxShadow: error ? "2px 2px 2px rgba(255, 0, 0, 0.603)" : "",
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(() => e.target.value)}
          name="password"
          placeholder="Password"
          className=" w-72 h-10 text-white bg-[#2e2e2e] rounded-lg pl-5 outline-none"
          style={{
            boxShadow: error ? "2px 2px 2px rgba(255, 0, 0, 0.603)" : "",
          }}
        />
        <div id="error" className="self-start">
          <img src="" alt="" />
          {error && <p className="text-red-600 font-medium">{error}</p>}
        </div>
        <p className="self-start text-stone-600 font-medium">
          Forgot password?
        </p>
        <button
          onClick={handleLogin}
          className=" w-72 h-10 text-white bg-[#2e2e2e] rounded-lg cursor-pointer"
        >
          Sign in
        </button>
        <p className="self-start  font-medium text-slate-500">
          No account?{" "}
          <Link className="font-normal text-stone-500">Create one</Link>
        </p>
      </form>
      <Link className="text-stone-500">Terms of Service - Privacy Policy</Link>
    </div>
  );
}

export default SignIn;
