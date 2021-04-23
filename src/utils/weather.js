import React from "react";

export const getDayOfWeek = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });
};

export const getDailyForecast = (forecast) => {
  const dailyForecast = { list: [] };
  let i;
  for (i = 0; i < forecast.list?.length; i += 8) {
    dailyForecast.list.push(forecast.list[i]);
  }
  return dailyForecast;
};
