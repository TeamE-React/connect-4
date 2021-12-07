import React, { useContext, useEffect, useState } from 'react';

// Components
import AppContext from '../../contexts/AppContext';
import AIBallSetters from './AIBallSetters';
import AIBoard from './AIBoard';
import { Ball } from '../../model';
const AICreateBoard = () => {
  const { isDropping } = useContext(AppContext);

  const [dummyArr, setDummyArr] = useState([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < 7; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        row.push(new Ball());
      }
      array.push(row);
    }
    setDummyArr(array);
  }, [])

  return (
    <div>
      {dummyArr.map((col, colIndex) => {
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
