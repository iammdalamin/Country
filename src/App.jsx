import React, { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/:name" element={<CountryDetails />} />

        {/* ... */}
      </Routes>
    </>
  );
}

export default App;
