import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SettingsAcount = () => {
  const navigation = useNavigation();
  return (
    <View className="items-center flex-1 justify-center">
      <TouchableOpacity
        className="bg-red-700 py-4 px-16 border-b-4 border-[#6f9499] rounded"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-white font-bold">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsAcount