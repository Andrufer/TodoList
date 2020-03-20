import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../scenes/login';
import RegisterScreen from '../scenes/register';

const Stack = createStackNavigator();

export default function () {
  return (
    // <Stack.Navigator>
    // <>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen} />
    // </>
    // </Stack.Navigator>
  );
}
