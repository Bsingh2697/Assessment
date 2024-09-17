import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKeys } from './ScreenKeys';
import { EKTabs } from './EKTabs';

const Stack = createStackNavigator();

function EKStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={ScreenKeys.TABS} component={EKTabs} />
    </Stack.Navigator>
  );
}

export { EKStack }