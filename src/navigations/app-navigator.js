import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    // <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
    // </Stack.Navigator>
  );
}

export default AppNavigator;