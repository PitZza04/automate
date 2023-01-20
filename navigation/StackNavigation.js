import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterNumberScreen from "../screens/RegisterNumberScreen";
import RegisterScreen from "../screens/RegisterScreen";



const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      options=
      {{
        headerShown: false
      }} 
      name="Login" 
      component={LoginScreen} 
      />

      <Stack.Screen
      options=
      {{
        headerShown: false
      }} 
      name="RegisterNumber" 
      component={RegisterNumberScreen}
      />

      <Stack.Screen 
      options=
      {{
            title: 'REGISTER',
            headerStyle: {
                backgroundColor: '#DF3111',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 18,
            },
      }} 
      name="Register" 
      component={RegisterScreen} 
      />

    </Stack.Navigator>
  );
};

export default StackNavigation;
