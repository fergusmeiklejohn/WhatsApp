import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";

import Message from "../components/message";
import { FlashList } from "@shopify/flash-list";
import InputBox from "../components/inputBox";

export default function ChatScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground source={bg} style={styles.container}>
        <FlashList
          data={messages}
          estimatedItemSize={94}
          renderItem={({ item }) => (
            <Message
              id={item.id}
              text={item.text}
              createdAt={item.createdAt}
              user={item.user}
            />
          )}
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
