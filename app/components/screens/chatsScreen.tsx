import React from "react";
import ChatListItem from "../chatListItem";

import { FlashList } from "@shopify/flash-list";

import chats from "../../../assets/data/chats.json";
import { View, StyleSheet } from "react-native";

const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "07:30",
  },
};

export default function ChatListScreen() {
  return (
    <View style={styles.container}>
      <FlashList
        data={chats}
        renderItem={({ item }) => (
          <ChatListItem
            id={item.id}
            user={item.user}
            lastMessage={item.lastMessage}
          />
        )}
        estimatedItemSize={70}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
