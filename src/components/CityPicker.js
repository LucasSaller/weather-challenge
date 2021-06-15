import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCity";
import axios from "axios";
import {
  Button,
  TextField,
  Paper,
  FormControl,
  InputAdornment,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#b6caf5",
  },
  paper: {
    padding: 20,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    minWidth: 320,
    minHeight: 213,
    backgroundColor: "#b6caf5",
  },
  form: {
    display: "flex",
  },
  input: {
    marginBottom: 25,
  },
  button: {
    fontSize: "1em",
    marginTop: "1em",
  },
}));
const CityPicker = ({ setCity, setConsultar }) => {
  const [search, setSearch] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(search);
  };

  return (
    <div>
      <Paper className={classes.paper} elevation={0}>
        <h1>Weather in your City</h1>
        <FormControl autoComplete="off" className={classes.form}>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              id="standard-basic"
              label="City"
              name="city"
              value={search}
              fullWidth
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter a City for e.g : London"
              className={classes.input}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityOutlinedIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Search
            </Button>
          </form>
        </FormControl>
      </Paper>
    </div>
  );
};

export default CityPicker;
