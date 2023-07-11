import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Appearance from './screens/settings/Appeareance';

export default function App() {
  return (
    <SafeAreaView>
     <Appearance />
    </SafeAreaView>
  );
}
