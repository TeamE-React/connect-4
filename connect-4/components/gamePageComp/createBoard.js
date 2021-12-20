import React, { useContext, useState, useEffect } from 'react';
import { Ball } from '../../model';

// Components
import AppContext from '../../contexts/AppContext';
import BallSetters from './ballSetters';
import AiBallSetters from './aiBallSetters';
import Board from '../gamePageComp/board';
import ShiningBalls from './shiningBalls';

const CreateBoard = () => {
  const { state, isDropping, isHard } = useContext(AppContext);

  const GetBallSetters = (props) => {
    const isHard = props.level;
    if (isHard) {
      return (
        <AiBallSetters
          key={props.colIndex}
          colIndex={props.colIndex}
          disabled={isDropping}
        />
      );
    } else {
      return (
        <BallSetters
          key={props.colIndex}
          colIndex={props.colIndex}
          disabled={isDropping}
        />
      );
    }
  };

  return (
    <div>
      {state.board.map((col, colIndex) => {
        return <GetBallSetters level={isHard} colIndex={colIndex} />;
      })}
      <Board />
      <ShiningBalls />
    </div>
  );
};

export default CreateBoard;
