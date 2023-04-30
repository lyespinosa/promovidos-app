import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import { mostrar } from "../assets";
import MyModal from "./MyModal";

//Icons
import { FontAwesome } from "@expo/vector-icons";

const Dropdown = ({
  Nombre,
  Municipio,
  Celular,
  Estructura,
  Cargo,
  Seccion,
  showButton = true,
  showModal = true,
  id,
  token,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cantidadPromotores, setCantidadPromotores] = useState(0);
  

  return (
    <View className="my-2">
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
              <View className="flex-row">
                  <Text className="text-base text-gray-600">
                <Text className="font-bold">Promovidos: </Text>
                {cantidadPromotores}
              </Text>
              <View className="flex-1 items-end">
              {showModal == true && (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setIsModalOpen(!isModalOpen)}
                >
                    <Text className="font-bold border-b border-[#435f9a] text-base text-[#435f9a]"> Ver mas </Text>
                </TouchableOpacity>
              )}   
              </View>
              </View>


              <MyModal
              cantidadPromotores={cantidadPromotores}
              setCantidadPromotores={setCantidadPromotores}
                token={token}
                id={id}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </View>
          )}
        </View>
        {showButton == true ? (
          <View className="h-10 justify-center py-1 items-center bg-[#435f9a] border-b-4 border-[#354b7a] rounded">
            <FontAwesome
              name="arrow-down"
              size={20}
              color="white"
              style={isOpen && { transform: [{ rotate: "180deg" }] }}
            />
          </View>
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;
