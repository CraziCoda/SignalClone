import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import React, { Component} from 'react'
import Privacy from './Components/Privacy'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Privacy/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
