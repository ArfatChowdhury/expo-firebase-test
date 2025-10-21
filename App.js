import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from './firebaseConfig';


export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleReg = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        // console.log(result);
        console.log('user',result.user);
        

      })
      .catch(error => {
        console.log(error);
        
      })
      setEmail('')
      setPassword('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please register</Text>

      <TextInput
        placeholder='Enter your email'
        onChangeText={setEmail}
        value={email}
        style={styles.TextInput}
      />
      <TextInput
        placeholder='Enter your password'
        onChangeText={setPassword}
        value={password}
        style={styles.TextInput}
        secureTextEntry
      />
      <StatusBar style="auto" />

      <Button onPress={handleReg} title='Register' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flex: 1,
    backgroundColor: '#f9f9f9',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    paddingBottom: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 10

  }
});
