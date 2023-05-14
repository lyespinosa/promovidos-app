import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


//Icons
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Insert from './screens/Insert';
import ViewAll from './screens/ViewAll';
import SettingsAcount from './screens/SettingsAcount';
import { useNavigation } from '@react-navigation/native';
import SafeViewAndroid from './components/SafeViewAndroid';
import DefaultStyles from './styles/DefaultStyles';
import { StatusBar } from 'expo-status-bar';


const StackViews = () => {

    const Tab = createBottomTabNavigator();

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <StatusBar style="auto" />
            <Tab.Navigator

                initialRouteName="View"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: `${DefaultStyles.blueColor}`,
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
                        unmountOnBlur: true
                    }}
                    listeners={({ navigation, route }) => ({
                        focus: () => {
                          // Cada vez que se navega a "Screen1",
                          // actualiza el estado para forzar un refresco
                          navigation.setParams({ refresh: true });
                        },
                      })}
                />
                <Tab.Screen
                    name="Ajustes"
                    component={SettingsAcount}
                    options={{
                        tabBarLabel: 'Ajustes',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings-outline" size={24} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default StackViews