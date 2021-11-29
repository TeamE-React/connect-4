import React, {useContext, useState} from "react";
import Link from "next/link";

// Styling
import { Button } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import AppContext from "../../contexts/AppContext";
import { Validation } from "../../model/validation";

export default function StartBtn() {
  const { dispatch, boardSize, playersList, errors, setErrors } = useContext(AppContext);
  const [isPlayable, setIsPlayable] = useState(false);

  const gameStart = () => {
    if(validationCheck()){
      setIsPlayable(true);
      console.log("gamestart!");
      dispatch({type: 'BUILD_BOARD', boardSize});
      dispatch({type: 'SET_CURR_PLAYER', playersList});
    }
  }

  const validationCheck = () => {
    const validation = new Validation(playersList);
    const isNameNotBlank = validation.isNotBlank("name");
    const isColorNotBlank = validation.isNotBlank("color");
    const isNameUnique = validation.isUnique("name");
    const isColorUnique = validation.isUnique("color");

    setErrors(validation.getErrors());
    return isNameNotBlank && isColorNotBlank && isNameUnique && isColorUnique;
  }

  const validButton = () => {
    return (
      <Link href={`/gamePage`}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={styles.btn}
          style={{ fontSize: "20px", marginTop: "4rem" }}
          onClick={gameStart}
        >
          Game Start
        </Button>
      </Link>
    )
  }

  const invalidButton = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.btn}
        style={{ fontSize: "20px", marginTop: "4rem" }}
        onClick={gameStart}
      >
        Game Start
      </Button>
    )
  }

  const StartButton = (props) => {
    return (props.isPlayable) ? validButton() : invalidButton();
  }

  return (
    <StartButton isPlayable={isPlayable} />
  );
}
