import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="w-full p-4 flex justify-center bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
      <div className="container max-w-4xl flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Weather App</h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
