import React from "react";

import LoginScreen from "../screens/LoginScreen";
import RegisterNumberScreen from "../screens/RegisterNumberScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OTPScreen from "../screens/OTPScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VehicleRegisterScreen from "../screens/VehicleRegisterScreen";
import BrandScreen from "../screens/BrandScreen";
import ModelScreen from "../screens/ModelScreen";
import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/*  */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={HomeScreen}
        />
        <Stack.Screen
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
        <Stack.Group>
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
            options={{ presentation: "modal", title: "Select Brand" }}
            name="Brand"
            component={BrandScreen}
          ></Stack.Screen>

          <Stack.Screen
            options={{ presentation: "modal" }}
            name="Model"
            component={ModelScreen}
          ></Stack.Screen>
        </Stack.Group>

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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
