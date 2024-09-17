import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor:'transparent'
  },
  accountView:{borderWidth:1, height:24,width:24,borderRadius:12},
  imageView: {borderRadius:12,height:24,width:24},
  dividerStyle:{height:2,width:50, marginBottom:8,borderBottomLeftRadius:10,borderBottomRightRadius:10}
});

export { styles };
