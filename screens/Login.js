import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, View, TouchableOpacity, ScrollView, } from "react-native";

import { background } from "../assets";
import Input from "../components/TextInputExample";
import { Triforce } from "../assets";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import axios from "axios";
import { Storage } from "expo-storage";
import { BASE_URL } from '@env'
import AwesomeAlert from "react-native-awesome-alerts";
import Alert from "../components/Alert";

const Login = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const tokens = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleEmailChange = (email) => {
    setEmail(email);
    console.log(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const saveData = async (data) => {
    try {
      await Storage.setItem({
        key: `user-data`,
        value: JSON.stringify(data)
      })
      navigation.navigate("Tabs")
    } catch (error) {
      console.error('Error al guardar datos en AsyncStorage:', error);
    }
  };

  const getUser = async (token) => {
    
    try {
      
      const response = await axios.get(`${BASE_URL}user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data)
      setIsCorrect(false)
      saveData(response.data)
    } catch (e) {
      console.log("Failed to get data");
    }
  };


  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(`${BASE_URL}login`, {
        email: email,
        password: password,
      });
      const data = response.data;
      if (data.status == 1) {
        setIsCorrect(true)
        console.log("Has iniciado");
        setIsLoading(false)
        getUser(data.msg)
      } else {
        setIsWrong(true)
        console.log("Error al inicar");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false)
   
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>

      <ScrollView className="bg-white">
        <Alert button={false} show={isLoading} onConfirmPressed={() => setIsLoading(false)} showProgress={true} />
        <Alert buttom={false} text={"Sesion iniciada"} buttonText={"Aceptar"} show={isCorrect} onConfirmPressed={() => setIsCorrect(false)} />
        <Alert text={"Usuario incorrecto"} buttonText={"Aceptar"} show={isWrong} onConfirmPressed={() => setIsWrong(false)} />

        <Image
          source={background} // Ruta de la imagen de fondo
          className="absolute top-0 bottom-0 left-0 right-0 w-full"
        />
        <KeyboardAwareScrollView>
          <View className="min-h-[100vh] flex-1 relative items-center py-8 justify-center mt-12">
            <View className="items-center bg-white w-96  h-[600px] rounded-3xl overflow-hidden relative border-[#E8E8E8] border-x-4 shadow-2xl shadow-[#E8E8E8]">
              <View className="absolute bottom-8 rotate-[28deg]">
                <Image className="object-scale-down " source={Triforce} />
              </View>
              <View className="items-center w-full h-full">
                <View className="bg mt-6 rounded-3xl px-10  bg-[#dbc25f] justify-center py-2 border-[#E8E8E8] border-x-4 shadow shadow-[#E8E8E8]">
                  <Text className="text-3xl font-bold text-stone-50 ali">
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
                  onPressIn={handleSubmit}
                  className="bg-[#435f9a] py-3 px-14 border-x-4 border-[#354b7a] rounded-3xl mb-20 items-center mt-10"
                >
                  <Text className="font-extrabold text-lg text-stone-50">
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
