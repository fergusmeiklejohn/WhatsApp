import React from "react";
import ChatListItem from "../chatListItem";

import { FlashList } from "@shopify/flash-list";

import chats from "../../../assets/data/chats.json";
import { View, StyleSheet } from "react-native";

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
