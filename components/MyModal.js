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
import DropPromovidos from "./DropPromovidos";


const MyModal = ({ isModalOpen, setIsModalOpen, id, token,setCantidadPromotores,cantidadPromotores}) => {
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
        setCantidadPromotores(data.length);
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
            <ScrollView showsVerticalScrollIndicator={false} className="w-full">
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsModalOpen(!setIsModalOpen)}
                className="flex-row border-b border-[#E8E8E8] bg-[#67b99a] w-full p-2"
              >
                <Text className="flex-1 text-center pl-6 text-white font-extrabold text-[20px]">
                  Promovidos
                </Text>
                <FontAwesome name="close" size={24} color="white" />
              </TouchableOpacity>
              <View className="min-h-[65vh]">
                {
                  promotores.length > 0 ? (
                    <>
                      <Navbar></Navbar>
                      <View className="w-[95%] m-auto" >
                        {promotores.map((promotor) => {
                          return (
                            <Dropdown
                              showButton={false}
                              showModal={false}
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
                      </View>
                    </>
                  )
                    :
                    <View className="items-center justify-center flex-1">
                      <Text className="text-2xl font-semibold text-[#cecece]">Sin promovidos</Text>
                    </View>
                }
              </View>

            </ScrollView>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default MyModal;
