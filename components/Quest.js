import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
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
        <View style={styles.itemLeft}>
          <Text style={styles.square}>{props.tick}</Text>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        {/* <View style={styles.circular}></View> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    fontFamily: "PressStart2P",
    width: 24,
    height: 24,
    color: "#FFF",
    borderColor: "#FFF",
    borderWidth: 3,
    padding: 3,
    marginRight: 15,
  },
  itemText: {
    fontFamily: "PressStart2P",
    maxWidth: "90%",
    color: "#FFF",
    fontSize: 16,
  },
  //   circular: {
  //     width: 12,
  //     height: 12,
  //     borderColor: "#94CB4B",
  //     borderWidth: 2,
  //     borderRadius: 5,
  //   },
});

export default Quest;
