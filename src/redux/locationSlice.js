import {createSlice} from '@reduxjs/toolkit';
import {getRequest, LOCATIONS_URL} from '../service/api';

const locationSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: [],
    loading: false,
    error: null,
  },
  reducers: {
    locationsLoading: state => {
      state.loading = true;
      state.error = null;
    },
    locationsSuccess: (state, action) => {
      state.loading = false;
      state.locations = action.payload;
      state.error = null;
    },
    locationsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchLocations = () => async dispatch => {
  try {
    dispatch(locationsLoading());
    const res = await getRequest(LOCATIONS_URL);
    dispatch(locationsSuccess(res.data.results));
  } catch (error) {
    dispatch(locationsError(error.message));
  }
};

export const {locationsLoading, locationsSuccess, locationsError} =
  locationSlice.actions;

export default locationSlice.reducer;
