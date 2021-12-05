import React, { useContext } from 'react';

// Components
import AppContext from '../../contexts/AppContext';
import AIBallSetters from './AIBallSetters';
import AIBoard from './AIBoard';

const AICreateBoard = () => {
  const { state, isDropping } = useContext(AppContext);

  return (
    <div>
      {state.board.map((col, colIndex) => {
        return (
          <AIBallSetters
            key={colIndex}
            colIndex={colIndex}
            disabled={isDropping}
          />
        );
      })}
      <AIBoard />
    </div>
  );
};

export default AICreateBoard;
