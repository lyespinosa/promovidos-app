import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'expo-storage'

const deleteData = async () => {
  try {
    await Storage.removeItem({ key: `user-data` })
    await Storage.removeItem({ key: `user-token` })
    await Storage.removeItem({ key: `user-promotor` })
    console.log('datos borrados')
  }
  catch {
    console.log('Error al borrar datos')
  }
}

const SettingsAcount = () => {
  const navigation = useNavigation();
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <TouchableOpacity
        className="bg-red-700 py-4 px-16 border-b-4 border-[#6f9499] rounded"
        onPress={() => navigation.navigate("Login")}
        onPressIn={deleteData}
      >
        <Text className="font-bold text-white">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsAcount