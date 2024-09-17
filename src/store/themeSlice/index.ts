import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'Dark' | 'Light';

export interface State {
  appTheme: Theme;
}

export const initialState: State = {
  appTheme: 'Light',
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<Theme>) {
      state.appTheme = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
const themeSliceReducer = themeSlice.reducer;
export { themeSliceReducer };
