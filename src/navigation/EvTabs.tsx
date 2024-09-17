import { BottomTabBarProps, BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { ScreenKeys } from './ScreenKeys';
import Media from '../screens/media';
import Games from '../screens/games';
import Reports from '../screens/reports';
import Account from '../screens/account';
import { EvTabParamList } from './types';
import TabBar from '../components/tabBar';
import { useAppTheme } from '../utils/theming';

const Tab = createBottomTabNavigator<EvTabParamList>();

type TabProps = BottomTabScreenProps<EvTabParamList>;


function TabBarWrapper(props: JSX.IntrinsicAttributes & BottomTabBarProps) {
  return <TabBar {...props} />;
}

function EvTabs() {
  const {colors:{secondary, theme_dark_gray}} = useAppTheme()
  return (
    <Tab.Navigator 
      detachInactiveScreens={false}
      screenOptions={({ navigation, route }: TabProps) => ({
          navigation: navigation,
          headerShown: false,
        })}
    tabBar={TabBarWrapper}
    >
      <Tab.Screen name={ScreenKeys.HOME} component={Home} />
      <Tab.Screen name={ScreenKeys.MEDIA} component={Media} />
      <Tab.Screen name={ScreenKeys.GAMES} component={Games} />
      <Tab.Screen name={ScreenKeys.REPORTS} component={Reports} />
      <Tab.Screen name={ScreenKeys.ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
}
export {EvTabs}