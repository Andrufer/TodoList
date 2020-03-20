import React, { useState } from 'react';
import { SafeAreaView, TouchableHighlight } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { View, Image, ActivityIndicator } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <Image
        source={require('../../assets/images/task_list.png')}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <Input
          label='Email'
          mode='outlined'
          value={email}
          onChangeText={setEmail}
        />
        <Input mode='outlined'
          label='Password'
          value={password}
          onChangeText={setPassword}
        />
        <Button
          onPress={() => navigation.navigate('Main')}
          title='Log in' />
      </View>
      <Text onPress={() => navigation.navigate('Register')}>New to us? Sign Up</Text>
    </SafeAreaView>
  );
}

export default LoginScreen;