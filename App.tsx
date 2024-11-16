import React, {useState} from 'react';
import {SafeAreaView, Button, Text, StyleSheet} from 'react-native';
import {add} from './src/utils/stringCalculator';
import {moderateScale} from './src/utils/helper';
import {Colors} from './src/utils/colors';
import {CustomInput} from './src/components/customInput';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError('');
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An error occurred');
      }
      setResult(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter numbers"
      />
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(16),
  },

  result: {
    marginTop: moderateScale(16),
    fontSize: moderateScale(18),
  },
  error: {
    marginTop: moderateScale(16),
    fontSize: moderateScale(18),
    color: Colors.red,
  },
});

export default App;
