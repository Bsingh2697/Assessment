import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKeys } from './ScreenKeys';
import { EvTabs } from './EvTabs';

const Stack = createStackNavigator();

function EvStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={ScreenKeys.TABS} component={EvTabs} />
    </Stack.Navigator>
  );
}

export { EvStack }