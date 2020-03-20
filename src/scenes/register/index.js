import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Input, Button } from 'react-native-elements';


const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <SafeAreaView>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
      />
      <Button title='Confirm' onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
};

export default RegisterScreen;