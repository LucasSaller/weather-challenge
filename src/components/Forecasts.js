import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Forecast from "./Forecast";
import { getDailyForecast } from "../utils/weather";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    backgroundColor: "#b6caf5",
    borderRadius: "5px",
  },
  cards: {
    width: "100%",
  },
  h3: {
    opacity: 0.7,
  },
}));

const Forecasts = ({ weatherData }) => {
  const classes = useStyles();

  if (weatherData == null) {
    return null;
  } else {
    return (
      <Paper className={classes.paper} elevation={0}>
        <h1>Daily Forecast 5 days</h1>
        <h3 className={classes.h3}>{weatherData?.city?.name}</h3>
        <Grid container justify="center">
          {weatherData &&
            getDailyForecast(weatherData).list.map((item, index) => (
              <Grid item xs={12} lg={2} style={{ minWidth: 150 }}>
                <Forecast key={index} weatherData={item} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    );
  }
};
export default Forecasts;
