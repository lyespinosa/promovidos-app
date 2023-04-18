import { View, Text, TextInput, Image } from 'react-native'
import { buscar } from '../assets'
import React from 'react'

const Navbar = () => {
  return (
    <View className='mb-4 mt-2 bg-w border-b border-[#E8E8E8] pb-4 items-center shadow-md'>
        <View className='flex-row items-center bg-white rounded-full p-2 border border-gray-400 w-80 '>
      <TextInput
        className='flex-1 text-gray-600 ml-2'
        placeholder="Buscar..."
      />
      <View className='bg-gray-200 rounded-full p-2'>
        <Image source={buscar} name="search" size={20} color="gray"/>
      </View>
    </View> 
    </View>

  )
}

export default Navbar