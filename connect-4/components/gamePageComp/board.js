import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import styles from "../../styles/Home.module.css";
// import BallTemplate from "../../public/images/ball-template.svg";
// import BallRed from "../../public/images/ball-red.min.svg";

const Board = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={styles.bg_color}>
      {state.board.map((row, rowIndex) => {
        return (
          <div style={{ display: "flex" }}>
            {row.map((col, colIndex) => {
              return <div className={styles.ball}>{/* <BallRed /> */}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
