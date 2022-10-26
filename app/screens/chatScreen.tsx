import React, { useEffect } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ChatScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    // @ts-expect-error - route.params is not null need to figure out how to type it
    navigation.setOptions({ title: route.params.name });
  }, [route.params]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 95 : 90}
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
