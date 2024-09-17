
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../assets/images';
import { Divider } from 'react-native-paper';
import { useAppTheme, useThemeContext } from '../../utils/theming';
import { styles } from './screenContainer.styles'

interface Props{ 
  useSafeAreaView?: boolean;
  children: React.ReactNode;

}

const ScreenContainer = ({
useSafeAreaView = true,
children
}: Props)=> {
  const insets = useSafeAreaInsets();

    const {isDarkTheme} = useThemeContext()
    const {colors:{secondary}} = useAppTheme()

    return  <View style = {[{flex:1,backgroundColor:secondary}]}>
                <View style={[styles.headerView,{paddingTop: useSafeAreaView ? insets.top : 0}]}>
                    <View style={{flex:1}}>
                        <Image source={Images.Logo}/>
                    </View>
                    <View  style={{paddingStart:4}}>
                        <Image source={isDarkTheme ? Images.SearchLight : Images.SearchDark}/>
                    </View>
                    <View  style={{paddingHorizontal:20}}>
                        <Image source={isDarkTheme ? Images.MessageLight : Images.MessageDark}/>
                    </View>
                    <View  style={{}}>
                        <Image source={isDarkTheme ? Images.NotificationsLight : Images.NotificationsDark}/>
                    </View>
                </View>
                <Divider/>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                {children}
            </ScrollView>
        </View>
}

export default ScreenContainer