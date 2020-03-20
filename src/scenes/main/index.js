import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { Header } from 'react-native-elements';
import Todos from '../../components/Todos';

const MainScreen = ({ navigation }) => (
  <SafeAreaView>
    <Header
      leftComponent={{ text: 'To Do', style: { color: '#fff' } }}
      rightComponent={{ text: 'Logout', style: { color: '#fff' }, onPress: () => navigation.navigate('Login') }}
    />
    <Todos />
  </SafeAreaView>
);

export default MainScreen;