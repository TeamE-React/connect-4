import React, { useContext, useState } from "react";
import Image from "next/image";
import AppContext from "../../contexts/AppContext";
import styles from "../../styles/Home.module.css";
import BallRedSVG from "../svgFiles/ballRedSVG";
import TemplateBallSVG from "../svgFiles/templateBallSVG";
import BallRedMinSVG from "../../public/images/ball-red.min.svg";

// ball-red.min.svg
const Board = () => {
  const { state } = useContext(AppContext);
  const [color, setColor] = useState("red");

  return (
    <div className={styles.bg_color} style={{ marginBottom: "2rem" }}>
      {state.board.map((row, rowIndex) => {
        return (
          <div style={{ display: "flex" }}>
            {row.map((col, colIndex) => {
              return (
                <div className={styles.ball}>
                  {/* {col.color !== null && 
                    <Image
                      src="/images/ball-{col.color}.min.svg"
                      width="20px" height="20px"
                    />
                  } */}
                  <img
                    src={`/images/ball-${color}.min.svg`}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
