import {createSlice} from '@reduxjs/toolkit';
import {getRequest, EPISODES_URL} from '../service/api';

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episodes: [],
    loading: false,
    error: null,
  },
  reducers: {
    episodesLoading: state => {
      state.loading = true;
      state.error = null;
    },
    episodesSuccess: (state, action) => {
      state.loading = false;
      state.episodes = action.payload;
      state.error = null;
    },
    episodesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchEpisodes = () => async dispatch => {
  try {
    dispatch(episodesLoading());
    const res = await getRequest(EPISODES_URL);
    dispatch(episodesSuccess(res.data.results));
  } catch (error) {
    dispatch(episodesError(error.message));
  }
};

export const {episodesLoading, episodesSuccess, episodesError} =
  episodesSlice.actions;

export default episodesSlice.reducer;
