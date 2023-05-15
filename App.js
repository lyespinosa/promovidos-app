import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SafeViewAndroid from './components/SafeViewAndroid';

import Login from './screens/Login';
import StackViews from './StackViews';
import Principal from './screens/Principal';
import Insert from './screens/Insert';
import ViewAll from './screens/ViewAll';
import SettingsAcount from './screens/SettingsAcount';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tabs" component={StackViews} />
          <Stack.Screen
            name="Insert"
            component={Insert}
            options={{
              unmountOnBlur: false
            }}
          />
          <Stack.Screen
            name="ViewAll"
            component={ViewAll} options={{ unmountOnBlur: true }}
            listeners={({ navigation, route }) => ({
              focus: () => {
                // Cada vez que se navega a "Screen1",
                // actualiza el estado para forzar un refresco
                navigation.setParams({ refresh: true });
              },
            })} />
          <Stack.Screen name="Settings" component={SettingsAcount} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

