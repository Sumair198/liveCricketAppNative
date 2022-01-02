import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-web";
import Home from "./Home";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/MaterialIcons";
import Splash from "./Splash";
import { useEffect, useState } from "react";



export default function Header() {

  


    
    
  return (
    <>
      <StatusBar backgroundColor={"green"} />
      <View style={styles.topBar}>
        <Icons
          style={{ top: 29, left: 25 }}
          name="wifi-tethering"
          size={25}
          color={"white"}
        />
        <Text style={styles.txtStyle}>Live Score</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.txt1}>Hin</Text>
        <Text style={styles.txt2}>Jorr</Text>
        <Icon
          style={styles.iconStyle}
          name="cricket"
          size={70}
          color={"black"}
        />
      </View>

      <Home />
      {/* <Splash /> */}
      {/* <Home /> */}
      {/* <Home /> */}
    </>
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
