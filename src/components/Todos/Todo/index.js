import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';

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
      <List.Item
        title={task}
        onPress={() => toggleComplete()}
        right={props => (
          <List.Icon {...props} icon={done ? 'check' : 'cancel'} />
        )}
      />
    </>
  );
}

export default React.memo(Todo);