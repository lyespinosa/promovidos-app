import { View, Text } from 'react-native'
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


const StackViews = () => {

    const Tab = createBottomTabNavigator();

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <Tab.Navigator
        
            initialRouteName="View"
            screenOptions={{
                tabBarActiveTintColor: '#435f9a',
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
    )
}

export default StackViews