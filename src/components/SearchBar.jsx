import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const { setCity } = useContext(WeatherContext);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search any city..."
      className="p-2 rounded-full border-none bg-white text-gray-700 focus:outline-none shadow-md"
      onKeyDown={handleSearch}
    />
  );
};

export default SearchBar;
