import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Forecast from "./Forecast";
import { getDailyForecast } from "../utils/weather";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 10,
    textAlign: "center",
    backgroundColor: "#b6caf5",
    borderRadius: "5px",
  },
  cards: {
    display: "inline-flex",
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
      <Grid container>
        <Grid item xs={12} className={classes.paper}>
          <Paper className={classes.paper} elevation={0}>
            <h1>Daily Forecast 5 days</h1>
            <h3 className={classes.h3}>{weatherData?.city?.name}</h3>
            <div className={classes.cards}>
              {weatherData &&
                getDailyForecast(weatherData).list.map((item, index) => (
                  <Forecast key={index} weatherData={item} />
                ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
};
export default Forecasts;
