import { View } from "react-native";
import { useAppTheme, useThemeContext } from "../../utils/theming";
import { Switch, Text } from "react-native-paper";
import { styles } from './account.styles'
import ScreenContainer from "../../components/screenContainer";

const Account = () => {
    const { toggleTheme, isDarkTheme } = useThemeContext();
    const { colors:{placeholder} } = useAppTheme()
    return (
      <ScreenContainer>
        <View style={[styles.container]}>
            <Text style={styles.accountText}>Account</Text>
            <Text style={{fontSize:14}}>Switch Theme</Text>
            <View
            style={styles.switchView}>
            <Switch
              value={isDarkTheme}
              style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
              thumbColor={placeholder}
              onValueChange={toggleTheme}
            />
          </View>
        </View></ScreenContainer>
    );
}

export default Account;