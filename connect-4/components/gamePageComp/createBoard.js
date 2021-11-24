import React, {useContext} from 'react'

import AppContext from '../../contexts/AppContext';
import { Button } from "@material-ui/core";

const CreateBoard = () => {

  const getBoard = () => {
    console.log(state.board);
    console.log(state.currentPlayer);
  }

  const { state } = useContext(AppContext);

  return (
    <Button onClick={getBoard}>
      Click
    </Button>
  )
}

export default CreateBoard;