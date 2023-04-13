import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SafeViewAndroid from './components/SafeViewAndroid';

//Screens
import Insert from './screens/Insert';
import Login from './screens/Login';

export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Insert" >
          <Stack.Screen name="Insert" component={Insert} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}