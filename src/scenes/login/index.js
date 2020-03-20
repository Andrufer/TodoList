import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { View, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/1485/PNG/512/checklist_102320.png' }}
        style={{ width: 300, height: 300 }} />
      <View>
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
        <Button mode="contained" onPress={() => navigation.navigate('Main')}>
          Login
      </Button>
      </View>
      {/* <TouchableHighlight onPress={() => navigation.navigate('Main')}>

      </TouchableHighlight> */}
      <TouchableHighlight onPress={() => navigation.navigate('Register')}>
        <Text>New to us? Sign Up</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

export default LoginScreen;