import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import AppIcon from './screens/settings/Appearance/AppIcon';
import Camera from './screens/Camera';
import Privacy from './screens/status/Privacy';

export default function App() {
  return (
    <SafeAreaView>
      <Camera />
      <Privacy/>
    </SafeAreaView>
  );
}
