import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';

function Todo({ id, task, done }) {
  async function toggleComplete() {
    await firestore()
      .collection('todos')
      .doc(id)
      .update({
        done: !done,
      });
  }

  async function deleteTodo() {
    await firestore()
      .collection('todos')
      .doc(id)
      .delete();
  }
  return (
    <>
      <ListItem
        title={task}
        leftIcon={<Icon
          onPress={()=>toggleComplete()}
          name={done ? 'check' : 'minus'}
          size={24}
          color='black'
        />}
        rightIcon={<Icon
          onPress={()=>deleteTodo()}
          name='trash'
          size={24}
          color='black'
        />}
        bottomDivider
      />
    </>
  );
}

export default React.memo(Todo);