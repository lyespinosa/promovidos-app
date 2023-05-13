import { View, Text, TextInput, Image } from 'react-native'
import { buscar } from '../assets'
import React from 'react'

const Navbar = () => {
  return (
    <View className='mb-4 mt-2 bg-white items-center '>
        <View className='flex-row items-center p-2 border-[2px] border-gray-300 rounded-full w-80 '>
      <TextInput
        className='flex-1 ml-2 text-gray-600'
        placeholder="Buscar..."
      />
      <View className='p-2 bg-gray-200 rounded-full'>
        <Image source={buscar} name="search" size={20} color="gray" />
      </View>
    </View> 
    </View>

  )
}

export default Navbar