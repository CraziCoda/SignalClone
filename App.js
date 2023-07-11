import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Appearance from './screens/settings/Appeareance';
import AppIcon from './screens/settings/Appearance/AppIcon';

export default function App() {
  return (
    <SafeAreaView>
     <AppIcon />
    </SafeAreaView>
  );
}
