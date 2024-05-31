import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = ({ wHandler }) => {
  const [countryName, setCountryName] = useState();

  const handler = (name) => {
    if (name) {
      wHandler(name);
    }
  };

  return (
    <>
      <div className="flex items-center  justify-between p-4 bg-white w-3/4 rounded-lg shadow-lg">
        <IoSearchOutline className="text-2xl cursor-pointer" />

        <input
          type="text"
          placeholder="Search..."
          className="outline-none px-2 bg-transparent w-full"
          onChange={(e) => handler(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;
