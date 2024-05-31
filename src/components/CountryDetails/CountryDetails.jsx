import React from "react";
import { useLocation } from "react-router";
import { IoReturnUpBackOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const CountryDetails = () => {
  const { state } = useLocation();
  console.log(state);
  //   const { data, error, isLoading } = useGetLocationQuery(state.name.official);
  console.log(state);
  return (
    <div className="py-8 container mx-auto">
      <button className="px-4 py-2 rounded-xl cursor-pointer border mb-4">
        <Link to="/" className="flex justify-center items-center gap-2">
          <IoReturnUpBackOutline />
          Back
        </Link>
      </button>

      <div className="flex flex-row justify-start items-start w-full">
        <img src={state.flags.png} alt={state.flags.alt} className="w-[80%]" />
        <div className="px-5">
          <h1 className="text-3xl font-bold mb-5">{state.name.common}</h1>
          <h2 className="text-xl font-medium">
            Official Name:{state.name.official}
          </h2>
          <h2 className="text-lg font-medium">
            Capital: {state.capital} square km
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
