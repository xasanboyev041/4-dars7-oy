import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";
import banner from "../images/banner.jpg";

const WeatherCard = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);
  const { city } = useContext(WeatherContext);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  return (
    <div
      className="text-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-3xl mx-auto mb-8"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {weather ? (
        <>
          <h2 className="text-6xl font-bold mb-2">
            {weather.current.temp_c}°C
          </h2>
          <p className="text-xl mb-2">
            {weather.location.name}, {weather.location.country}
          </p>
          <p className="text-md text-white opacity-75">
            Sunset Time: {weather.forecast.forecastday[0].astro.sunset}
          </p>
        </>
      ) : (
        <p className="text-xl">Loading...</p>
      )}
    </div>
  );
};

export default WeatherCard;
