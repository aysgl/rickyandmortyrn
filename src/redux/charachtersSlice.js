import {createSlice} from '@reduxjs/toolkit';
import {getRequest, CHARACTERS_URL} from '../service/api';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    loading: false,
    error: null,
  },
  reducers: {
    charactersLoading: state => {
      state.loading = true;
      state.error = null;
    },
    charactersSuccess: (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = null;
    },
    charactersError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchCharacters = () => async dispatch => {
  try {
    dispatch(charactersLoading());
    const res = await getRequest(CHARACTERS_URL);
    dispatch(charactersSuccess(res.data.results));
  } catch (error) {
    dispatch(charactersError(error.message));
  }
};

export const {charactersLoading, charactersSuccess, charactersError} =
  charactersSlice.actions;

export default charactersSlice.reducer;
