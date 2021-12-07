import React, { useContext } from "react";
import styles from "../../styles/Home.module.css";
import AppContext from "../../contexts/AppContext";

const AIBoard = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={styles.bg_color} style={{ marginBottom: '2rem' }}>
      {state.board.map((row, rowIndex) => {
        return (
          <div style={{ display: 'flex' }}>
            {row.map((col, colIndex) => {
              return (
                <div className={styles.ball}>
                  {col.color !== null && (
                    <img src={`/images/ball-${col.color}.min.svg`} />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AIBoard;
