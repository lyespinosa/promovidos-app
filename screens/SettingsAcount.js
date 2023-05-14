import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'expo-storage'
import { female, male } from '../assets';
import DefaultStyles from '../styles/DefaultStyles';
import Svg, { Circle, Rect, SvgXml } from 'react-native-svg';

//icons
import { Ionicons } from '@expo/vector-icons';

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
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true)

  const [userPromotor, setUserPromotor] = useState()

  useEffect(() => {
    const data = async () => {
      setIsLoading(true)

      const promotor = JSON.parse(await Storage.getItem({ key: `user-promotor` }));
      setUserPromotor(promotor[0]);

      setIsLoading(false)

    };
    data();

  }, []);

  return (
    <View className="items-center justify-between flex-1 py-6 bg-white ">



      {isLoading
        ? (<>

          <View className="w-[94%] animate-bounce">

            <View className="h-16 flex-row items-center justify-between p-2 bg-gray-300 rounded-md w-100 mb-4">
              <View className="flex h-8 bg-gray-200 rounded-sm dark:bg-gray-700 w-32 "></View>
              <View className="flex-row items-center" >
                <View className="flex h-8 bg-gray-200 rounded-sm dark:bg-gray-700 w-32 "></View>
                <View className="flex items-center space-x-3">
                  <SvgXml style={{ width: 50, height: 50, color: '#E5E7EB', dark: { color: '#E5E7EB' } }} xml="<svg class='text-gray-200 w-14 h-14 dark:text-gray-700' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z' clip-rule='evenodd'></path></svg>" />
                </View>
              </View>
            </View>

            <View role="status" className="max-w-sm animate-pulse px-2 mt-4">
              <View className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-48 mb-4"></View>
              <View className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-52 mb-4"></View>
              <View className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-24 mb-4"></View>
              <View className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-4"></View>
              <View className="h-12 bg-gray-200 rounded-sm dark:bg-gray-700 w-90 mb-4"></View>
            </View>

          </View>

        </>

        )
        : (

          <View className="w-[94%]">
            <View className="flex-row items-center justify-between p-2 bg-gray-300 rounded-md">
              <TouchableOpacity
                onPress={() => { navigation.goBack() }}
                className="absolute left-0 justify-center items-center h-full w-10"
              >
                <Ionicons name="ios-arrow-back-sharp" size={24} color="black" />
              </TouchableOpacity>
              <Text className="text-[20px] font-semibold ml-10">Tu cuenta</Text>
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

        )
      }


      <TouchableOpacity
        className="px-16 py-4 bg-red-700 rounded w-[90%] items-center mt-20"
        onPress={() => navigation.navigate("Login")}
        onPressIn={deleteData}
      >
        <Text className="font-bold text-white">{isLoading ? '' : 'Cerrar sesión'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsAcount