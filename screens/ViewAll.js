import { View, Text ,ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar';

const datos = [
  { id: 1, texto: 'Dato 1' },
  { id: 2, texto: 'Dato 2' },
  { id: 3, texto: 'Dato 3' },
];


const ViewAll = () => {
  return (
    <ScrollView className="bg-white">
          <View className="bg-white min-h-[100vh] ">
          <Navbar></Navbar>
<View className="bg-white flex-1 min-h-[100vh] items-center">
 <Dropdown data={datos} /> 
 <Dropdown data={datos} /> 
 <Dropdown data={datos} /> 
 <Dropdown data={datos} /> 
 <Dropdown data={datos} /> 
 <Dropdown data={datos} /> 
</View>
      

    </View>
    </ScrollView>

  )
}

export default ViewAll