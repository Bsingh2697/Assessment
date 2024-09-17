import { combineReducers, Reducer, UnknownAction } from "@reduxjs/toolkit";
import storage from '@react-native-async-storage/async-storage';
import {persistReducer} from "redux-persist";
import { mediaReducer } from "./mediaSlice";
import { themeSliceReducer } from "./themeSlice";

const mediaPersistConfig = {
    key: 'media',
    storage,
  };

  const themePersistConfig = {
    key: 'theme',
    storage,
  };

const appReducer = combineReducers({
    media: persistReducer(mediaPersistConfig, mediaReducer),
  appTheme: persistReducer(themePersistConfig, themeSliceReducer),
  });

const rootReducer: Reducer<RootState> = (
    state: RootState | undefined,
    action: UnknownAction,
  ) => {
    try {
        return appReducer(state, action);
      } catch (error) {
        console.error(`Error running reducer action '${action.type}: '`, error);
        throw error;
      }
  }

export { rootReducer };
export type RootState = ReturnType<typeof appReducer>;