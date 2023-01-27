import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { AuthProvider } from "../hooks/useAuth";
AuthProvider;
const Stack = createStackNavigator();
const UserStack = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default UserStack;
