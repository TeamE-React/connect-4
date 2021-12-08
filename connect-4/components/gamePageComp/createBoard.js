import React, { useContext, useState, useEffect } from 'react';
// import { Ball } from '../../model';

// Components
import AppContext from '../../contexts/AppContext';
import BallSetters from './ballSetters';
import Board from '../gamePageComp/board';
import ShiningBalls from './shiningBalls';

const CreateBoard = () => {
  const { state, isDropping } = useContext(AppContext);
  // const [dummyArr, setDummyArr] = useState([]);

  // useEffect(() => {
  //   const array = [];
  //   for (let i = 0; i < 7; i++) {
  //     const row = [];
  //     for (let j = 0; j < 7; j++) {
  //       row.push(new Ball());
  //     }
  //     array.push(row);
  //   }
  //   setDummyArr(array);
  // }, [])

  return (
    <div>
      {state.board.map((col, colIndex) => {
        return (
          <BallSetters
            key={colIndex}
            colIndex={colIndex}
            disabled={isDropping}
          />
        );
      })}
      <Board />
      <ShiningBalls />
    </div>
  );
};

export default CreateBoard;
