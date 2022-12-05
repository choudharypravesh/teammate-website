import {StyleSheet} from 'react-native';
import {Text, View} from "../../components/Themed";
import EditScreenInfo from "../../components/EditScreenInfo";

const NewsScreen = ({}) => (
  <View style={styles.container}>
    <Text style={styles.title}>News</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
    <EditScreenInfo path="/screens/NewsScreen.tsx"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default NewsScreen
