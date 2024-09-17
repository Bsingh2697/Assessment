/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './src/navigation/Router';
import './src/utils/theming'
import { ThemeProvider } from './src/utils/theming';

function App(): React.JSX.Element {

  useEffect(() => {
    setTimeout(()=>{
      SplashScreen.hide();
    },500)
  }, []);

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Router/>
        </ThemeProvider>
        </PersistGate>
      </Provider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
