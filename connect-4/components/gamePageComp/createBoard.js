import React, { useContext } from 'react';

// Components
import AppContext from '../../contexts/AppContext';
import BallSetters from './ballSetters';
import Board from '../gamePageComp/board';
import ShiningBalls from './shiningBalls';

const CreateBoard = () => {
  const { state, isDropping } = useContext(AppContext);

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
