/* eslint-disable no-unused-vars */
import React from "react";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <>
      <div className="absolute w-full px-[20px] py-16 flex items-center justify-end text-white">
        <button className="bg-black h-full text-xl px-9 py-3 rounded-[100px] border-4 hover:bg-gray-500">
          Hire me
        </button>
        <i className="ri-more-2-fill text-3xl"></i>
      </div>
    </>
  );
};

export default Header;
