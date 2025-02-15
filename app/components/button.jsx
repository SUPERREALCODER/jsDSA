import { useState } from "react";

const Button = ({ text = "Click Me", onClick }) => {
  

    return (
      <button
        onClick={onClick}
        className="w-40 h-40 flex items-center justify-center font-bold text-white 
                 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg
                 hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  