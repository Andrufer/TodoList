import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Todo from './Todo';

function Todos() {
  const ref = firestore().collection('todos');
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  async function addTodo() {
    await ref.add({
      task: todo,
      done: false,
    });
    setTodo('');
  }

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { task, done } = doc.data();
        list.push({
          id: doc.id,
          task,
          done,
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
      <Appbar>
        <Appbar.Content title={'TODOs List'} />
      </Appbar>
      <FlatList
        style={{ flex: 1 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
      <TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
      <Button onPress={() => addTodo()}>Add TODO</Button>
    </>
  );
}


export default React.memo(Todos);