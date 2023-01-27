import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterNumberScreen from "../screens/RegisterNumberScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OTPScreen from "../screens/OTPScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VehicleRegisterScreen from "../screens/VehicleRegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../hooks/useAuth";
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          {/*  */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="RegisterNumber"
        component={RegisterNumberScreen}
      />

      <Stack.Screen
        options={{
          title: "REGISTER",
          headerStyle: {
            backgroundColor: "#DF3111",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 18,
          },
        }}
        name="Register"
        component={RegisterScreen}
      />

      <Stack.Screen
        options={{
          title: "VEHICLE REGISTER",
          headerStyle: {
            backgroundColor: "#DF3111",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 18,
          },
        }}
        name="VehicleRegister"
        component={VehicleRegisterScreen}
      />

      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#DF3111",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#DF3111",
          },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#DF3111",
          },
          headerTintColor: "#fff",
        }}
      /> */}
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default AuthStack;
