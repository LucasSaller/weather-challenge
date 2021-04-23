import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { getDayOfWeek } from "../utils/weather";
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    backgroundColor: "transparent",
  },
  cardContent: {
    lineHeight: 1.8,
  },
  media: {
    width: 100,
    height: "auto",
  },
});
const Forecast = ({ weatherData }) => {
  const classes = useStyles();
  const { main, weather } = weatherData;
  return (
    <Card className={classes.root} elevation="0">
      <h1>{getDayOfWeek(weatherData?.dt_txt)}</h1>

      <CardActionArea>
        <img
          className={classes.media}
          title="Weather Icon"
          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
        />
        <CardContent className={classes.cardContent}>
          <Typography color="primary" variant="h3">
            {main.temp.toFixed(0)}°C
          </Typography>
          <Typography variant="h6">{weather[0].main}</Typography>
          <Typography variant="subtitle2">
            {" "}
            Feels like: {main.feels_like.toFixed(0)}°C
          </Typography>
          <Typography variant="subtitle2">Humidity:{main.humidity}%</Typography>
          <Typography variant="subtitle2">
            {" "}
            Wind: {weatherData.wind.speed}m/s
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Forecast;
