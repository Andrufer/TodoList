import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { ScrollView, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { firebase } from '@react-native-firebase/auth';

import Todo from './Todo';

function Todos() {
  const ref = firestore().collection('todos');
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const userId = firebase.auth().currentUser.uid;

  async function addTodo() {
    await ref.add({
      task: todo,
      done: false,
      userId
    });
    setTodo('');
  }

  useEffect(() => {
    return ref.where('userId', '==', userId).onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { task, done, userId } = doc.data();
        list.push({
          id: doc.id,
          task,
          done,
          userId
        });
      });

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.formLogin}>
            <Input
              value={todo}
              placeholder='New Task'
              onChangeText={setTodo}
              leftIcon={
                <Icon
                  name='plus'
                  size={24}
                />
              }
            />
            <Button
              onPress={() => addTodo()}
              title='Add new Todo'
              disabled={todo === ''} />
          </View>
        </View>
        {todos.map(todo => (<Todo {...todo} />))}
      </ScrollView>
    </>
  );
}


export default React.memo(Todos);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  formLogin: {
    height: 100,
    width: 370,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  }
});