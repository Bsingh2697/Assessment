// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { rootReducer, RootState } from './reducers';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      // eslint-disable-next-line unicorn/prefer-spread
      .filter(middleware => !!middleware),
});

export const persistor = persistStore(store);
export { store };

export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, unknown, Action>;
