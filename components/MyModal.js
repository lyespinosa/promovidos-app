import { View, Text, Modal, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const MyModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal visible={isModalOpen} transparent={true} animationType="fade">
      <View className="flex-1 justify-center">
        <View className="items-center bg-white">
          <Text>Hola</Text>
          <TouchableOpacity onPress={() => setIsModalOpen(!setIsModalOpen)}>
            <Text>Close and save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;
