import { createSlice } from '@reduxjs/toolkit';
import { setMediaFeature } from './features/setMedia';
import { Media } from '../types';

export interface State {
  media: Media[]
}

export const initialState: State = {
  media: [],
};

const mediaSlice = createSlice({
  name: 'mediaDataSlice',
  initialState,
  reducers: {
    setMedia: setMediaFeature.action,
  },
});

export const { setMedia } = mediaSlice.actions;

const mediaReducer = mediaSlice.reducer;
export { mediaReducer };
