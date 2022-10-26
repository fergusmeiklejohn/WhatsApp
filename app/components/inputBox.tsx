import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

export default function InputBox() {
  const [newMessage, setNewMessage] = React.useState("");

  const onSendPress = () => {
    console.warn("Sending...", newMessage);
    setNewMessage("");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />

      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        multiline
        style={styles.input}
      />
      <MaterialIcons
        onPress={onSendPress}
        style={styles.send}
        name="send"
        size={24}
        color="white"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
