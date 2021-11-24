import {combineReducers} from 'redux';

import board from './boardReducer'
import currentPlayer from './currentPlayerReducer';

export default combineReducers({board, currentPlayer});