import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'expo-storage'
import { female, male } from '../assets';
import DefaultStyles from '../styles/DefaultStyles';

const deleteData = async () => {
  try {
    await Storage.removeItem({ key: `user-data` })
    await Storage.removeItem({ key: `user-token` })
    await Storage.removeItem({ key: `user-promotor` })
  }
  catch {
  }
}

const SettingsAcount = () => {
  const [userPromotor, setUserPromotor] = useState()

  useEffect(() => {
    const data = async () => {
      const promotor = JSON.parse(await Storage.getItem({ key: `user-promotor` }));
      setUserPromotor(promotor[0]);

    };
    data();

  }, []);

  const navigation = useNavigation();
  return (
    <View className="items-center justify-between flex-1 py-12 bg-white ">

      <View className="w-[94%]">
        <View className="flex-row items-center justify-between p-2 bg-gray-300 rounded-md">
          <Text className="text-[20px] font-semibold">Tu cuenta</Text>
          <View className="flex-row items-center">
            <Text className="px-2 font-semibold capitalize text-[16px]">{`${userPromotor?.nombre} ${userPromotor?.paterno}`}</Text>
            <Image className="w-12 h-12" source={userPromotor?.fksexo == 2 ? male : female} />
          </View>
        </View>

        <View className="px-2 mt-6">
          <Text style={DefaultStyles.infoAccount} >
            Nombre completo: <Text style={DefaultStyles.infoAccountText}>{`${userPromotor?.nombre} ${userPromotor?.paterno} ${userPromotor?.materno}`}
            </Text>
          </Text >
          <Text style={DefaultStyles.infoAccount} >Numero celular: <Text style={DefaultStyles.infoAccountText}>{`${userPromotor?.celular}`}</Text></Text>
          <Text style={DefaultStyles.infoAccount} >Cargo: <Text style={DefaultStyles.infoAccountText}>{`${userPromotor?.cargo}`}</Text></Text>
          <Text style={DefaultStyles.infoAccount} >Sección: <Text style={DefaultStyles.infoAccountText}>{`${userPromotor?.seccion}`}</Text></Text>

          <Text style={DefaultStyles.infoAccount} >Dirección: <Text style={DefaultStyles.infoAccountText}>{`Colonia ${userPromotor?.colonia} ${userPromotor?.direccion} No.${userPromotor?.exterior}`}</Text></Text>
        </View>
      </View>

      <TouchableOpacity
        className="px-16 py-4 bg-red-700 rounded w-[90%] items-center mt-20"
        onPress={() => navigation.navigate("Login")}
        onPressIn={deleteData}
      >
        <Text className="font-bold text-white">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsAcount