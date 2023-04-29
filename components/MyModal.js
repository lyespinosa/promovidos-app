import {
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { s } from "react-native-wind";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import { BASE_URL } from "@env";
import { Storage } from "expo-storage";
import { useNavigation } from "@react-navigation/native";


const MyModal = ({ isModalOpen, setIsModalOpen, id, token }) => {
  const [promotores, setPromotores] = useState([]);

  useEffect(() => {
        console.log("entrando a modal")
        console.log(token)
        fetch(`${BASE_URL}promotors/listar/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setPromotores(data);
          })
          .catch((err) => {
            console.log("error: " + err);
          });
  }, []);

  return (
    <Modal
      visible={isModalOpen}
      transparent={true}
      animationType="fade"
      className
    >
      <View className="flex-1 justify-center bg-gray-300/[0.4] blur-2xl">
        <BlurView intensity={5}>
          <View className="items-center h-[80vh] my-[20vh]  bg-white mx-5 border-2 border-[#E8E8E8] rounded-3xl overflow-hidden shadow-md shadow-[#E8E8E8]">
            <ScrollView  showsVerticalScrollIndicator={false} className="w-full">
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsModalOpen(!setIsModalOpen)}
                className="flex-row border-b border-[#E8E8E8] bg-red-500 w-full p-2"
              >
                <Text className="flex-1 text-center pl-6 text-white font-extrabold text-[20px]">
                  Promovido
                </Text>
                <FontAwesome name="close" size={24} color="white" />
              </TouchableOpacity>
              <Navbar></Navbar>

              {promotores.map((promotor) => {
                return (
                  <Dropdown
                  showButton={false}
                    key={promotor.idpromotor}
                    Nombre={promotor.nombre}
                    Municipio={promotor.municipio}
                    Celular={promotor.celular}
                    Estructura={promotor.estructura}
                    Cargo={promotor.celular}
                    Seccion={promotor.seccion}
                  />
                );
              })}
            </ScrollView>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default MyModal;
