import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";

import Message from "../components/message";
import { FlashList } from "@shopify/flash-list";

export default function ChatScreen() {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <FlashList
        data={messages}
        renderItem={({ item }) => (
          <Message
            id={item.id}
            text={item.text}
            createdAt={item.createdAt}
            user={item.user}
          />
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
