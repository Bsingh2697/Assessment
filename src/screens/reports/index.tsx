import { View } from "react-native";
import ScreenContainer from "../../components/screenContainer";
import { Text } from "react-native-paper";
import { styles } from "./reports.styles";

const Reports = () => {
    return (
        <ScreenContainer>
        <View style={styles.container}>
            <Text style={{fontSize:20}}>Report</Text>
        </View>
        </ScreenContainer>
    );
}

export default Reports;