import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

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
      <ScrollView>
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
        <Button onPress={() => addTodo()} title='add task' />
        {todos.map(todo => (<Todo {...todo} />))}
      </ScrollView>
    </>
  );
}


export default React.memo(Todos);