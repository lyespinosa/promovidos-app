import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import { mostrar } from "../assets";
import MyModal from "./MyModal";

const DropPromovidos = ({
  Nombre,
  Municipio,
  Celular,
  Estructura,
  Cargo,
  Seccion,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="my-1">
      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePress}
        className="bg-white border-2 border-[#E8E8E8] rounded shadow-md "
      >
        <View className="px-4 py-2 pb-4 ">
          <Text className="text-base text-gray-600">
            <Text className="font-bold">Nombre: </Text>
            {Nombre}
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-bold">Municipio: </Text>
            {Municipio}
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-bold">Telefono: </Text>
            {Celular}
          </Text>

          {isOpen && (
            <View>
              <Text className="text-base text-gray-600">
                <Text className="font-bold ">Estructura: </Text>
                {Estructura}
              </Text>
              <Text className="text-base text-gray-600">
                <Text className="font-bold">Cargo: </Text>
                {Cargo}
              </Text>
              <Text className="text-base text-gray-600">
                <Text className="font-bold">Seccion: </Text>
                {Seccion}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DropPromovidos;
