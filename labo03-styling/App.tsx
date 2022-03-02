import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStack from './screens/Appstack';

export default function App() {
  //const Stack = createStackNavigator()

  //todo: denk na over app container
  //denk na over safe areas
  //denk na over opsplitsing

  return (
    
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <AppStack />
        </SafeAreaProvider>
      </NavigationContainer> 
    
  );
}


