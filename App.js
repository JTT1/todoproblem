import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { db, ROOT_REF } from './firebase/Config';

export default function App() {
  const [newTodo, setNewTodo] = useState('');


  // const createTwoButtonAlert = () => Alert.alert(
  //   "Todolist", "Remove all items?", [{
  //     text: "Cancel",
  //     onPress: () => console.log("Cancel Pressed"),
  //     style: "cancel"
  //   },
  //   {
  //     text: "OK", onPress: () => removeTodos()
  //   }],
  //   { cancelable: false }
  // );


  function addNewTodo() {
    if (newTodo.trim() !== "") {
      db.ref(ROOT_REF).push({
        done: false,
        todoItem: newTodo
      })
      setNewTodo('');
    }
  }

  function removeTodos() {
    db.ref(ROOT_REF).remove();
  }

  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.header}>Todolist</Text>
      <View style={styles.newItem}>
        <TextInput
          placeholder='Add new todo'
          value={newTodo}
          style={styles.textInput}
          onChangeText={setNewTodo}        
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title='Add new todo item'
          onPress={() => addNewTodo()}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title='Remove all todos'
          onPress={() => removeTodos()}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    height: '20%',
  },
  contentContainerStyle: {
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10
  },
  newItem: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  infoText: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 15
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    width: "80%"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  todoText: {
    borderColor: '#afafaf',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
    minWidth: '70%'
  },
  headerItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  logoutIcon: {
    marginTop: 10,
    marginLeft: 50,
  }
});
