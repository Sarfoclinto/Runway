import React from "react";

function Modal({ openmodal, closemodal, children }) {
  return (
    <>
      {openmodal && (
        <div className="z-50 fixed w-full h-full flex justify-center items-center backdrop-blur-sm">
          <button
            onClick={closemodal}
            className="absolute w-10 h-10 rounded full flex items-center justify-center bg-red-700 text-white top-3 right-3"
          >
            &times;
          </button>
          {children}
        </div>
      )}
    </>
  );
}

export default Modal;
