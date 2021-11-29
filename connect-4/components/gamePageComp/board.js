import React, {useContext} from 'react'
import AppContext from '../../contexts/AppContext';
import styles from '../../styles/Home.module.css';
import BallRedSVG from '../svgFiles/ballRedSVG';
import TemplateBallSVG from '../svgFiles/templateBallSVG';
import BallRedMinSVG from '../../public/images/ball-red.min.svg';

// ball-red.min.svg
const Board = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={styles.bgColor}>
      {state.board.map((row, rowIndex) => {
        return(
          <div style={{display: "flex"}}>
            {row.map((col, colIndex) => {
              return(
                <div className={styles.ball}>
                  {col.color !== null && <BallRedMinSVG />}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board;