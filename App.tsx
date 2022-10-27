import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigator from "./app/navigation/navigator";

import { Amplify } from "aws-amplify";
import awsconfig from "./app/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ awsconfig, Analytics: { disabled: true } });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);
