import React from "react";

const Country = ({ info }) => {
  return (
    <div className="w-[300px] m-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer flex flex-col justify-start">
      <img
        src={info.flags.png}
        alt={info.flags.alt}
        className="rounded-lg h-[170px] w-full"
      />

      <div className="px-2 py-4">
        <h1 className="text-xl font-bold">Country: {info.name.common}</h1>
      </div>
    </div>
  );
};

export default Country;
