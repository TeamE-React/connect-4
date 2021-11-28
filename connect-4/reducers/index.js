import {combineReducers} from 'redux';

import board from './boardReducer'
import currentPlayer from './currentPlayerReducer';
import ball from './setBallReducer';

export default combineReducers({board, currentPlayer, ball});