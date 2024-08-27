import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Tashkent");

  return (
    <WeatherContext.Provider value={{ city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
