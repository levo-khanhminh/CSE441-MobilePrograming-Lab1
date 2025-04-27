import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const HailstoneSequence = () => {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState('');

  const generateHailstone = () => {
    let n = parseInt(number);
    if (isNaN(n) || n <= 0) {
      setSequence("Please enter a positive number");
      return;
    }

    let seq = '';
    while (n !== 1) {
      seq += n + ' -> ';
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    seq += '1'; // Add the final 1
    setSequence(seq);
  };

  return (
    <View style={styles.container}>
      <Text>Hailstone sequence</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a positive number"
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
        />
      </View>

      <Button title="Generate Sequence" onPress={generateHailstone} />

      <View style={styles.resultContainer}>
        {sequence !== '' && (
          <Text style={styles.resultText}>{sequence}</Text>
        )}
      </View>
    </View>
  );
};

export default HailstoneSequence;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  inputContainer: {
    marginVertical: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    width: 200,
    borderRadius: 8,
    fontSize: 18,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  resultText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
