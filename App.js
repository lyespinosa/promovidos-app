import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import SafeViewAndroid from './components/SafeViewAndroid';

//Icons
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Insert from './screens/Insert';
import Login from './screens/Login';
import ViewAll from './screens/ViewAll';
import SettingsAcount from './screens/SettingsAcount';

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
      <Tab.Navigator
          initialRouteName="View"
          screenOptions={{
              tabBarActiveTintColor: 'green'
          }}
      >
          <Tab.Screen
              name="Insert"
              component={Insert}
              options={{
                  tabBarLabel: 'Agregar',
                  tabBarIcon: ({ color, size }) => (
                    <Octicons name="person-add" size={24} color={color} />
                  ),
                  headerShown: false,
              }}
          />
          <Tab.Screen
              name="View"
              component={ViewAll}
              options={{
                  tabBarLabel: 'Todos',
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="address-book" size={24} color={color} />
                  ),
                  headerShown: false,
              }}
          />
          <Tab.Screen
              name="Ajustes"
              component={SettingsAcount}
              options={{
                  tabBarLabel: 'Ajustes',
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings-outline" size={24} color={color} />
                  ),
                  headerShown: false,
              }}
          />
      </Tab.Navigator>
  );
}

export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Tabs" component={MyTabs} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>

        


      </NavigationContainer>
    </SafeAreaView>
  );
}