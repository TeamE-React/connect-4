import React, { useContext } from 'react';
import styles from '../../styles/Home.module.css';
import AppContext from '../../contexts/AppContext';

const Board = () => {
  const { state } = useContext(AppContext);

  const setBall = (e) => {
    e.preventDefault();
    console.log("click");

  };

  const getBall = (rowId, colId) => {
    return state.board[rowId][colId];
  };

  return (
    <div className={styles.bg_color} style={{ marginBottom: '2rem' }}>
      {state.board.map((row, rowIndex) => {
        return (
          <div style={{ display: 'flex' }}>
            {row.map((col, colIndex) => {
              return (
                <button className={styles.ball} onClick={setBall}>
                  {/* {col.color !== null && (
                    <img src={`/images/ball-${col.color}.min.svg`} />
                  )} */}
                  click me
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
