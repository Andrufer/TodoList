import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { Header } from 'react-native-elements';
import Todos from '../../components/Todos';
import { firebase } from '@react-native-firebase/auth';

const MainScreen = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const handleLogout = async () => {
    await firebase.auth().signOut();
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    navigation.navigate('Login');
  }

  return (<SafeAreaView>
    <Header
      leftComponent={{ text: 'ToDo\'s', style: { color: '#fff' } }}
      centerComponent={{ text: user ? user.email : '', style: { color: '#fff' } }}
      rightComponent={{ text: 'Logout', style: { color: '#fff' }, onPress: () => handleLogout() }}
    />
    <Todos />
  </SafeAreaView>
  );
};

export default MainScreen;