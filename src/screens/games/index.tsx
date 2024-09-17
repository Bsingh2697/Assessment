import { View } from "react-native";
import ScreenContainer from "../../components/screenContainer";
import { styles } from "./games.styles";
import { Text } from "react-native-paper";

const Games = () => {
    return (
        <ScreenContainer>
        <View  style={styles.container}>
            <Text style={{fontSize:20}}>Games</Text> 
        </View>
        </ScreenContainer>
    );
}

export default Games;