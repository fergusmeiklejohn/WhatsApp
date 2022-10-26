import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View, StyleSheet } from "react-native";

import chats from "../../assets/data/chats.json";

import ContactListItem from "../components/ContactListItem";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlashList
        data={chats}
        renderItem={({ item }) => <ContactListItem user={item.user} />}
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
