import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import Quest from "./components/Quest";

export default function App() {
  const [quest, setQuest] = useState();
  const [questItems, setQuestItems] = useState([]);

  const handleAddQuest = () => {
    Keyboard.dismiss();
    setQuestItems([...questItems, quest]);
    setQuest(null);
  };

  const completeQuest = (index) => {
    let itemsCopy = [...questItems];
    itemsCopy.splice(index, 1);
    setQuestItems(itemsCopy);
  };

  let [fontsLoaded] = useFonts({
    PressStart2P: require("./assets/Fonts/PressStart2P-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {/* Today's Quest */}
        <View style={styles.questsWrapper}>
          <Text style={styles.sectionTitle}>Today's quests</Text>
          <View style={styles.questBox}>
            <View style={styles.items}>
              {/* This is where quests will go */}
              {questItems.map((item, index) => {
                return (
                  // <Quest text={item} />
                  <View style={styles.questList}>
                    <Quest text={item} />
                    <TouchableOpacity
                      key={index}
                      onPress={() => completeQuest(index)}
                    >
                      <View style={styles.deleteWrapper}>
                        <Text style={styles.deleteText}>x</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* Write a quest */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeQuestWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Add new quest"}
            value={quest}
            onChangeText={(text) => setQuest(text)}
          ></TextInput>

          <TouchableOpacity onPress={() => handleAddQuest()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
  },
  questsWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  questList: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "90%",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
    fontFamily: "PressStart2P",
  },
  questBox: {
    height: "88%",
    borderColor: "#FFF",
    borderWidth: 3,
  },
  items: {
    marginTop: 15,
  },
  writeQuestWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: 3,
    width: "60%",
    fontFamily: "PressStart2P",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#2B9EEB",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 3,
  },
  addText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "PressStart2P",
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
