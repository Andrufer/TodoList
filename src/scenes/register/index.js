import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import { firebase } from '@react-native-firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      cleanErrors();
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Login');
      cleanInputs();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') setShowErrorEmail(true);
      else if (error.code === 'auth/weak-password') setShowErrorPassword(true);
    }
  }

  const cleanInputs = () => {
    setEmail(''); setPassword('');
  }
  const cleanErrors = () => {
    setShowErrorEmail(false); setShowErrorPassword(false);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text h2>Form Register</Text>
        <View style={styles.formLogin}>
          <Input
            label='Email'
            value={email}
            onChangeText={setEmail}
            errorMessage={showErrorEmail ? 'Email already in use' : ''}
          />
          <Input
            label='Password'
            value={password}
            onChangeText={setPassword}
            errorMessage={showErrorPassword ? 'Weak password' : ''}
            secureTextEntry
          />
          <Button
            title='Confirm'
            onPress={() => handleSignUp()} disabled={email === '' || password === ''} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 200
  },
  formLogin: {
    height: 220,
    width: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});