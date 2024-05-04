import {createSlice} from '@reduxjs/toolkit';
import {getRequest, CHARACTERS_URL} from '../service/api';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    loading: false,
    error: null,
    images: [],
    params: {
      page: 1,
      status: null,
      gender: null,
    },
  },
  reducers: {
    setCharactersLoading: state => {
      state.loading = true;
      state.error = null;
    },
    setCharactersSuccess: (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = null;
    },
    setCharactersError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    appendCharacters: (state, action) => {
      state.loading = false;
      state.characters.push(...action.payload);
      state.error = null;
      state.params.page += 1;
    },
    setFilterParams: (state, action) => {
      state.params = action.payload;
    },
  },
});

export const fetchCharacters = () => async (dispatch, getState) => {
  const {params} = getState().characters;
  try {
    dispatch(setCharactersLoading());
    const res = await getRequest(`${CHARACTERS_URL}?page=${params.page}`);
    dispatch(setCharactersSuccess(res.data.results));
  } catch (error) {
    dispatch(setCharactersError(error.message));
  }
};

export const getCharacter = id => async dispatch => {
  try {
    dispatch(setCharactersLoading());
    const res = await getRequest(`${CHARACTERS_URL}/${id}`);
    dispatch(setCharactersSuccess(res.data.results));
  } catch (error) {
    dispatch(setCharactersError(error.message));
  }
};

export const filterCharacters = params => async dispatch => {
  try {
    dispatch(setCharactersLoading());
    const res = await getRequest(
      `${CHARACTERS_URL}?gender=${params.gender}&status=${params.status}`,
    );
    dispatch(setCharactersSuccess(res.data.results));
  } catch (error) {
    dispatch(setCharactersError(error.message));
  }
};

export const searchCharacter = query => async dispatch => {
  try {
    dispatch(setCharactersLoading());
    const res = await getRequest(`${CHARACTERS_URL}`, {name: query});
    dispatch(setCharactersSuccess(res.data.results));
  } catch (error) {
    dispatch(setCharactersError(error.message));
  }
};

export const loadMoreCharacters = () => async (dispatch, getState) => {
  const {page} = getState().characters.params;
  try {
    dispatch(setCharactersLoading());
    const res = await getRequest(`${CHARACTERS_URL}?page=${page + 1}`);
    dispatch(appendCharacters(res.data.results));
  } catch (error) {
    dispatch(setCharactersError(error.message));
  }
};

export const {
  setCharactersLoading,
  setCharactersSuccess,
  setCharactersError,
  appendCharacters,
  setFilterParams,
} = charactersSlice.actions;

export default charactersSlice.reducer;
