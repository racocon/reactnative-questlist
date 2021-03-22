import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useFonts } from "expo-font";

const Quest = (props) => {
  let [fontsLoaded] = useFonts({
    PressStart2P: require("../assets/Fonts/PressStart2P-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.item}>
        <BouncyCheckbox
          style={styles.checkbox}
          isChecked={false}
          color="#FFF"
          fontFamily="PressStart2P"
          fillColor="transparent"
          borderRadius="0"
          borderColor="#FFF"
          borderWidth="3"
          text={props.text}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    flex: 1,
  },
  itemText: {
    fontFamily: "PressStart2P",
    maxWidth: "90%",
    color: "#FFF",
    fontSize: 16,
  },
  deleteWrapper: {
    width: 30,
    height: 30,
    backgroundColor: "#E56F5A",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 3,
  },
  deleteText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "PressStart2P",
  },
});

export default Quest;
