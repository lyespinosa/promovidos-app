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
import MyModal from './components/MyModal';


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
            <MyModal></MyModal>
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
        </SafeAreaView>
    )
}

export default StackViews