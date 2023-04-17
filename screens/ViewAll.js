import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import AwesomeAlert from 'react-native-awesome-alerts';
import AlertButton from '../components/Alert';

const ViewAll = () => {


  


  return (
    <View className="bg-white flex-1">
      <AlertButton messageText={"Promovido agregado"} buttonText={"Agregar"} />
    </View>
  )
}

export default ViewAll