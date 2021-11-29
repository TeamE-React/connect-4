import React, { useContext, useState, useEffect } from "react";

// React Icons
import { GrPowerReset } from "react-icons/gr";
import { RiTimerLine } from "react-icons/ri";

// Styling
import { Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import theme from "../../theme/theme";

// Components
import CreateBoard from "./createBoard";
import PlayersTurn from "./playersTurn";
import PlayersInfo from "./playersInfo";
import AppContext from "../../contexts/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const GamePage = () => {
  const { dispatch, boardSize } = useContext(AppContext);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [interval] = useState(null);

  const classes = useStyles();

  const resetBoard = () => {
    console.log("reset!");
    dispatch({ type: "BUILD_BOARD", boardSize });
  };

  const toggleTimer = () => {
    console.log("timer start!");
    const pad = (val) => {
      let valString = val + "";
      if (valString.length < 2) return "0" + valString;
      else return valString;
    };

    const incrementTime = () => {
      setTotalSeconds(++totalSeconds);
      setMinutes(pad(parseInt(totalSeconds / 60)).toString());
      setSeconds(pad(parseInt(totalSeconds % 60)).toString());
    };

    clearInterval(interval);
    interval = setInterval(incrementTime, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <PlayersTurn />
          </Grid>
          <Grid item xs={4}>
            <PlayersInfo />
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="center">
              <Button onClick={toggleTimer}>click</Button>
              <RiTimerLine />
              {minutes}:{seconds}
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.reset_btn}
                style={{ fontSize: "20px", margin: "1.3rem" }}
                onClick={resetBoard}
              >
                <GrPowerReset />
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <p>
                <span style={{ color: "gray" }}>Click buttons to play</span>
              </p>
            </Box>
          </Grid>
          <Grid item xs={4}>
            {/* Player2: ee */}
          </Grid>
          <CreateBoard />
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default GamePage;
