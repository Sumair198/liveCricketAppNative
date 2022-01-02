import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-web";
import Home from "./src/screens/Home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/MaterialIcons";
import Splash from "./src/screens/Splash";
import Header from "./src/screens/Header";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    // <>
    //   <Header />
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "green",
  },
  txtStyle: {
    top: 30,
    left: 30,
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  name: {
    flexDirection: "row",
    top: 100,
    left: "11%",
  },
  txt1: {
    fontSize: 50,
    fontWeight: "bold",
    color: "green",
  },
  txt2: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
