import React, { useState } from 'react';
import { Button, Text, Input } from 'react-native-elements';
import { View, Image, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';

import { firebase } from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const handleSingIn = async () => {
    try {
      cleanErrors();
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Main');
      cleanInputs();
    } catch (error) {
      if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') setShowErrorEmail(true);
      else if (error.code === 'auth/wrong-password') setShowErrorPassword(true);
    }
  }

  const cleanInputs = () => {
    setEmail(''); setPassword('');
  }
  const cleanErrors = () => {
    setShowErrorPassword(false); setShowErrorEmail(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/images/task_list.png')}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text h1 style={styles.textLogo}>ToDo App</Text>
      </View>
      <View style={styles.formLogin}>
        <Input
          label='Email'
          value={email}
          onChangeText={setEmail}
          errorMessage={showErrorEmail ? 'User not found / user invalid' : ''}
        />
        <Input
          label='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          errorMessage={showErrorPassword ? 'Incorrect password' : ''}
        />
        <Button
          disabled={email === '' || password === ''}
          onPress={() => handleSingIn()}
          title='Log in' />
      </View>
      <Text>
        New to us?
        <Text onPress={() => navigation.navigate('Register')} style={styles.linkSignUp}>
          {' '}Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  containerLogo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  textLogo: {
    fontStyle: 'italic',
    fontWeight: '100',
  },
  formLogin: {
    height: 220,
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  linkSignUp: {
    color: '#00aae4'
  }
});