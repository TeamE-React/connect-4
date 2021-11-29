import React, { useContext } from "react";

import AppContext from "../../contexts/AppContext";
import { Button, Box } from "@material-ui/core";
import BallSetters from "../ballSetters";
import Board from "../gamePageComp/board";

const CreateBoard = () => {
  const getBoard = () => {
    console.log(state.board);
    console.log(state.currentPlayer);
  };

  const { state } = useContext(AppContext);

  return (
    <div style={{ marginBottom: "3rem" }}>
      {/* <Button onClick={getBoard}>Click</Button> */}
      {state.board.map((col, colIndex) => {
        return <BallSetters key={colIndex} colIndex={colIndex} />;
      })}
      <Board />
    </div>
  );
};

export default CreateBoard;
