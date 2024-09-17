import { State } from '..';
import { PayloadAction } from '@reduxjs/toolkit';
import { Media } from '../../types';

const setMediaFeature = {
  action: (state: State, { payload }: PayloadAction<Media[]>) => {
    state.media = payload;
  },
};

export { setMediaFeature };
