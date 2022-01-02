import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Header");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    flexDirection: "row",
  },
  txt1: {
    fontSize: 70,
    fontWeight: "bold",
    color: "green",
  },
  txt2: {
    fontSize: 70,
    fontWeight: "bold",
  },
});
