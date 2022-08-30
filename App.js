import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Counter from './src/components/counter/Counter';

export default function App() {

  const [counters, setCounters] = useState([])
  const [input, setInput] = useState("1")

  const handlePress = () => {
    if (parseInt(input)) {
      setCounters(p => [...p, parseInt(input)])
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Counters</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} value={input} onChangeText={t => setInput(t)}
          keyboardType="numeric"></TextInput>
        <Button title='Create' onPress={handlePress}></Button>
      </View>
      <FlatList
        data={counters}
        renderItem={({item}) => <Counter incrementation={item}></Counter>}
        keyExtractor={(item, index) => index}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  formContainer: {
    flexDirection: "row"
  },
  title: {
    fontSize: 50,
    marginBottom: 10
  },
  input: {
    width: 200,
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 5
  }
});
