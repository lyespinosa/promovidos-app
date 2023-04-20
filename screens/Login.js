import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { background } from "../assets";
import Input from "../components/TextInputExample";
import { Triforce } from "../assets";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import axios from "axios";
import AwesomeAlert from "react-native-awesome-alerts";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
    console.log(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const alert = () => {
    console.log("Entro");
    return (
      <AwesomeAlert
        show={true}
        showProgress={false}
        title="AwesomeAlert"
        message="I have a message for you!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => navigation.navigate("Tabs")}
      />
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://192.168.1.131:8000/api/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    alert();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView className="bg-white">
        <Image
          source={background} // Ruta de la imagen de fondo
          className="absolute top-0 left-0 right-0 bottom-0 w-full"
        />
        <KeyboardAwareScrollView>
          <View className="min-h-[100vh] flex-1 relative items-center py-8 justify-center mt-12">
            <View className="items-center bg-white w-96  h-[600px] rounded-3xl overflow-hidden relative border-[#E8E8E8] border-x-4 shadow shadow-[#E8E8E8]">
              <View className="absolute bottom-8 rotate-[28deg]">
                <Image className=" object-scale-down " source={Triforce} />
              </View>
              <View className="items-center w-full h-full">
                <View className="bg mt-6 rounded-3xl px-10  bg-[#dbc25f] justify-center py-2 border-[#E8E8E8] border-x-4 shadow shadow-[#E8E8E8]">
                  <Text className=" text-3xl font-bold text-stone-50 ali">
                    Ingrese sus datos
                  </Text>
                </View>

                <Input
                  classname={"mt-24"}
                  secure={false}
                  placeholder={"Usuario"}
                  password={false}
                  change={handleEmailChange}
                />
                <Input
                  classname={"mt-4"}
                  secure={true}
                  placeholder={"Contraseña"}
                  password={true}
                  change={handlePasswordChange}
                />
                <TouchableOpacity
                  onPressIn={() => navigation.navigate("Tabs")}
                  className="bg-[#435f9a] py-4 px-20 border-b-4 border-[#354b7a] rounded mb-20 items-center mt-10"
                >
                  <Text className="font-bold text-base text-stone-50">
                    Iniciar sesion
                  </Text>
                </TouchableOpacity>
              </View>

              <StatusBar style="auto" />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </>
  );
};

export default Login;

//border-[#E8E8E8] border-x-2 rounded-2xl shadow shadow-[#E8E8E8]
