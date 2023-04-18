import React, { useState } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { mostrar } from "../assets";


const Dropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="my-2">
      <TouchableOpacity
        onPress={handlePress}
        className=" bg-white border border-gray-400 rounded   shadow-md"
      >
        <View className="py-2 pb-4 px-4 ">
          <Text className="text-base text-gray-600">
            <Text className="font-bold">Nombre: </Text>{data.nombre}
            
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-bold">Municipio: </Text>{data.fkmunicipio}
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-bold">Telefono: </Text>{data.celular}
          </Text>

          {isOpen && (
            <View>
              <Text className="text-base text-gray-600">
                <Text className="font-bold ">Estructura: </Text>{data.fkestructura}
              </Text>
              <Text className="text-base text-gray-600">
                <Text className="font-bold">Cargo: </Text>{data.cargo}
              </Text>
              <Text className="text-base text-gray-600">
                <Text className="font-bold">Seccion: </Text>{data.seccion}
              </Text>
              <Text className="text-base text-gray-600">
                <Text className="font-bold">Promovidos: </Text>----------
              </Text>
            </View>
          )}
        </View>
        <View className="py-1 items-center bg-[#435f9a] border-b-4 border-[#354b7a] rounded">
          <Image source={mostrar} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;