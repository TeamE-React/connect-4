import React, { useContext } from 'react';
import styles from '../../styles/Home.module.css';
import AppContext from '../../contexts/AppContext';

const ShiningBalls = () => {
  const { state, winnerExist } = useContext(AppContext);

  if (winnerExist) {
    return (
      <div className={styles.bg_dark} style={{ marginBottom: '2rem' }}>
        {state.board.map((row, rowIndex) => {
          return (
            <div style={{ display: 'flex' }}>
              {row.map((col, colIndex) => {
                return (
                  <div className={styles.shining_ball}>
                    {col.color === state.currentPlayer.color && (
                      <>
                        <img src={`/images/ball-${col.color}.min.svg`} />
                        <div className={styles.shining}></div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default ShiningBalls;
