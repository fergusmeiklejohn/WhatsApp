import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface chatMessage {
  id: string;
  user: {
    image: string;
    name: string;
  };
  lastMessage: {
    text: string;
    createdAt: string;
  };
}

export default function ChatListItem(props: chatMessage) {
  const { id, user, lastMessage } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.subtitle}>
            {dayjs(lastMessage.createdAt).fromNow()}
          </Text>
        </View>
        <Text style={styles.subtitle} numberOfLines={2}>
          {lastMessage.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  message: {},
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    flex: 1,
  },
  subtitle: {
    color: "grey",
  },
});
