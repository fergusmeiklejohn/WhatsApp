import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ChatListItem from "./app/components/chatListItem";

const msg = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    createdAt: "2 minutes ago",
    text: "Hey, how are you?",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem id={msg.id} user={msg.user} lastMessage={msg.lastMessage} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
