import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#b6caf5",
    borderRadius: 7,
  },
  paper: {
    flex: "1 1 0%",
    padding: 20,
    minWidth: 320,
    backgroundColor: "#b6caf5",
    fontWeight: 600,
  },
  temp: {
    fontSize: 40,
  },
  icon: {
    width: 100,
  },
  item: {
    alignSelf: "flex-end",
  },
  subtitle: {
    opacity: 0.7,
  },
  content: {
    justifyContent: "space-between",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const CurrentWeather = ({ weatherData }) => {
  console.log(weatherData);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h1>CurrentWeather</h1>
        <Grid className={classes.content}>
          {weatherData ? (
            <>
              <Grid item xs={12} sm={6} className={classes.item}>
                <div className={classes}>
                  <p>{weatherData?.city.name}</p>
                </div>
                <div className={classes.subtitle}>
                  {weatherData?.list[0]?.weather[0].main}
                </div>
                <div className={classes.temp}>
                  <Typography variant="h2" color="primary">
                    {weatherData?.list[0]?.main.temp.toFixed(0)}°C
                  </Typography>
                </div>
                <div className={classes.subtitle}>
                  Feels like {weatherData?.list[0]?.main.feels_like.toFixed(0)}
                  °C
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  className={classes.icon}
                  src={`https://openweathermap.org/img/wn/${weatherData?.list[0].weather[0].icon}@2x.png`}
                />
                <div className={classes.subtitle}>
                  Humidity: {weatherData?.list[0]?.main.humidity}%
                </div>
                <div className={classes.subtitle}>
                  Wind: {weatherData?.list[0]?.wind.speed} m/s
                </div>
                <div className={classes.subtitle}>
                  Pressure:{weatherData?.list[0]?.main.pressure} hPa
                </div>
              </Grid>
            </>
          ) : (
            <Grid>
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
};

export default CurrentWeather;
