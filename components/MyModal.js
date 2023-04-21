import { View, Text, Modal, Button, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { s } from "react-native-wind";

const MyModal = ({ isModalOpen, setIsModalOpen }) => {
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
            
            <TouchableOpacity activeOpacity={1}   onPress={() => setIsModalOpen(!setIsModalOpen)} className="flex-row border-b border-[#E8E8E8] bg-red-500 w-full p-2">
            <Text className="flex-1 text-center pl-6 text-white font-extrabold text-[20px]">Promovido</Text>
              <FontAwesome name="close" size={24} color="white"/>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default MyModal;
