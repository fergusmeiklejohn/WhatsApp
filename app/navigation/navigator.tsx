import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import ChatScreen from "../screens/chatScreen";
import MainTabNavigator from "./mainTabNavigator";

type RootStackParamsList = {
  Main: undefined;
  Chat: { id: string; name: string };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "whitesmoke" },
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
