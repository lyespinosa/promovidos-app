import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SafeViewAndroid from './components/SafeViewAndroid';

import Login from './screens/Login';
import StackViews from './StackViews';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen  name="Tabs" component={StackViews} />
          <Stack.Screen  name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

