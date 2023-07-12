import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Help from './screens/settings/Help';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Help/>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container: {
    flex : 1,
    marginTop: 10
  }
})