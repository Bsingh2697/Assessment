/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


function App(): React.JSX.Element {

  useEffect(() => {
    setTimeout(()=>{
      SplashScreen.hide();
    },500)
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Thanks</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
