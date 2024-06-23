import React from "react";

function UpInputs({ img, placeholder, label }) {
  return (
    <div className=" flex flex-col gap-1 mb-3">
      <label htmlFor="name" className="text-white font-medium text-lg">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          autoFocus
          id="name"
          name="name"
          placeholder={placeholder}
          className="w-80 text-lg py-1 px-5 pl-7 bg-[#101015] outline-none rounded-lg border border-stone-800"
        />
        <img
          src={`src/assets/${img}.png`}
          alt=""
          className="absolute top-3 left-2"
        />
      </div>
    </div>
  );
}

export default UpInputs;
