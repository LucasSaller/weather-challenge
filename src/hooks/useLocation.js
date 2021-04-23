import React, { useState, useEffect } from "react";
// const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
// let apiUrl;
// const getWeatherData = async (param1, param2, type) => {
//   apiUrl =
//     type === "coordinates"
//       ? (apiUrl = `${baseUrl}&lat=${param1}&lon=${param2}&units=metric&appid=123710781c6111cf922e33dfae173213`)
//       : (apiUrl = `${baseUrl}&q=${param1}&units=metric&appid=123710781c6111cf922e33dfae173213`);
//   const response;
//   return  response;
// };
const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState();

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({
      latitude,
      longitude,
    });
  };
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
  return { location, error };
};

export default useLocation;
