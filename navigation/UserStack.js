import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ServicesScreen from "../screenTest/ServicesScreen";
import EmergencyInfo from "../screenTest/EmergencyInfo";
const Stack = createStackNavigator();
export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Service" component={ServicesScreen} />
        <Stack.Screen name="Emergency" component={EmergencyInfo} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
