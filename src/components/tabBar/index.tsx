import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScreenKeys } from '../../navigation/ScreenKeys';
import { styles } from './tabBar.styles';
import _ from 'lodash'
import { Divider, Icon, Text } from 'react-native-paper';
import { Images } from '../../assets/images';
import { useAppTheme } from '../../utils/theming';

export interface TabBarIconProps {
  routeName: ScreenKeys;
  isSelected: boolean;
}

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {

  const insets = useSafeAreaInsets();
  const {colors:{theme_blue,secondary,border, theme_black, theme_white, primary}} = useAppTheme()

  const TabBarIcon = ({ routeName, isSelected }: TabBarIconProps) => {

  const isMediaSelected = state.index === 1;

  const getIconColor = () => {
    if (isSelected) {
      return theme_blue;
    } else if (isMediaSelected) {
      return theme_white;
    }
    return primary;
  };

    switch (routeName) {
      case ScreenKeys.HOME: {
        if (isSelected) {
          return <Icon size={24} source={'home-minus'} color={getIconColor()}/>;
        }
        return <Icon size={24}source={'home-minus-outline'} color={getIconColor()}/>;
      }
      case ScreenKeys.MEDIA: {
        if (isSelected) {
          return <Icon size={24} source={'play'}  color={getIconColor()}/>;
        }
        return <Icon size={24} source={'play-outline'} color={getIconColor()}/>;
      }
      case ScreenKeys.GAMES: {
        if (isSelected) {
          return <Icon size={24} source={'microsoft-xbox-controller'}  color={getIconColor()}/>;
        }
        return <Icon size={24} source={'microsoft-xbox-controller-off'} color={getIconColor()}/>;
      }
      case ScreenKeys.REPORTS: {
        if (isSelected) {
          return <Icon size={24} source={'chart-box'} color={getIconColor()}/>;
        }
        return <Icon size={24} source={'chart-box-outline'} color={getIconColor()}/>;
      }
      case ScreenKeys.ACCOUNT: {
        return <View style={[styles.accountView,{borderColor:theme_blue}]}>
            <Image source={Images.User} style={styles.imageView}/>
        </View>
      }

        }
    };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          backgroundColor: state.index === 1 ? theme_black : secondary,
          borderColor:border
        }
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;
        const isSelected = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isSelected && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={[styles.tabContainer]}
            key={route.key}>
            <Divider style={[styles.dividerStyle,{backgroundColor: isSelected ? theme_blue : 'transparent'}]}/>
            <TabBarIcon
              routeName={route.name as ScreenKeys}
              isSelected={isSelected}
            />
            <Text
              style={[
                {
                  fontSize: 10,
                  color:state.index === 1 ? theme_white : primary
                },
              ]}>
              {_.capitalize(label)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
