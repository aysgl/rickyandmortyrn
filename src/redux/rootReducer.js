import {combineReducers} from 'redux';
import charachtersSlice from './charachtersSlice';
import locationSlice from './locationSlice';
import episodesSlice from './episodesSlice';

const rootReducer = combineReducers({
  characters: charachtersSlice,
  locations: locationSlice,
  episodes: episodesSlice,
});

export default rootReducer;
