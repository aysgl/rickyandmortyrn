import {combineReducers} from 'redux';
import charachtersSlice from './charachtersSlice';
import locationSlice from './locationSlice';

const rootReducer = combineReducers({
  characters: charachtersSlice,
  locations: locationSlice,
});

export default rootReducer;
