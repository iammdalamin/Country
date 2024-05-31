import React, { useState } from "react";
import { useGetLocationQuery } from "../../features/countriesApi";
import Country from "../../components/Country/Country";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";

function HomePage() {
  const [countryInfo, setCountryInfo] = useState("all");
  const { data, error, isLoading } = useGetLocationQuery(countryInfo);
  const countryHandler = (countryName) => {
    if (countryName.length > 0) {
      setCountryInfo(`name/${countryName}`);
    }
  };
  return (
    <div className="hero">
      <div className="container pb-6 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl text-gray-700">Search Your Dream Country</h1>
        <SearchBox wHandler={countryHandler} />
      </div>
      <div className="container mx-auto flex flex-wrap justify-center">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error: Failed to load</h1>
        ) : (
          data &&
          data.map((d, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center w-full max-w-sm">
              <Link to={`/${d.name.common}`} state={d}>
                <Country info={d} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
