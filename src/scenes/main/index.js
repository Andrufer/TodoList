import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

import Todos from '../../components/Todos';

const MainScreen = ({ navigation }) => (
  <SafeAreaView>
    <Todos />
    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
      <Text>Logout</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default MainScreen;