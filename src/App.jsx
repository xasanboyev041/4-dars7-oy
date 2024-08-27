import React from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Map from "./components/Map";
import WeatherProvider from "./context/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <WeatherCard />
          <Map />
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;
