import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        label='Email'
        mode='outlined'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput mode='outlined'
        label='Password'
        value={password}
        onChangeText={setPassword}
      />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Register
      </Button>
      <TouchableHighlight onPress={() => navigation.navigate('Login')}>
        <Text>Return Login</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default RegisterScreen;