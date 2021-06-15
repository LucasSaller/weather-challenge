import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CityPicker from "./CityPicker";
import Forecasts from "./Forecasts";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import useLocation from "../hooks/useLocation";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  home: {
    minHeight: "94vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: 800,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [cityName, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const { location, error } = useLocation();

  useEffect(() => {
    if (!cityName) {
      if (!location) return;
      let { latitude, longitude } = location;
      const consultarApiIp = async () => {
        const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?&lang=en&units=metric&lat=${latitude}&lon=${longitude}&appid=123710781c6111cf922e33dfae173213`;
        const resultadoWeather = await axios.get(urlWeather);
        setWeatherData(resultadoWeather.data);
      };
      consultarApiIp();
    } else {
      const consultarApiCity = async () => {
        const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=en&units=metric&appid=123710781c6111cf922e33dfae173213`;
        const resultadoWeather = await axios.get(urlWeather);
        setWeatherData(resultadoWeather.data);
      };
      consultarApiCity();
    }
  }, [location, cityName]);

  return (
    <>
      <div className={classes.home}>
        <div className={classes.container}>
          <Grid container spacing={1} style={{ margin: 20 }}>
            <Grid item xs={12} lg={6}>
              <CityPicker
                setCity={setCity}
                cityName={cityName}
                className={classes.card}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              {weatherData && <CurrentWeather weatherData={weatherData} />}
            </Grid>
            <Grid item xs={12} lg={12}>
              {weatherData && (
                <Forecasts cityName={cityName} weatherData={weatherData} />
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
