import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-blue-300 h-12 text-white p-2 flex justify-between align-middle shadow-md">
      <span>REACT-STORE-CHALLENGE</span>
      <form className="flex  align-middle w-1/2">
        <input
          type="text"
          placeholder="Search your product"
          className="rounded-lg p-2 text-gray-900"
        />
        <input type="button" value=" search" className="bg-blue-500 ml-2  hover:bg-blue-700 text-white font-bold  rounded  px-8 uppercase" />

      </form>

      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </nav>
  );
};
