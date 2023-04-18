import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

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
    console.log('Entro')
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
        onConfirmPressed={() => navigation.navigate("Tabs")
        }
      />
    )
  }

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
    <ScrollView className="bg-white">

      <KeyboardAwareScrollView>
        <View className="min-h-[100vh] flex-1 relative items-center py-8 justify-center">

          <View className="h-16 w-30 ">
            <Image className="object-scale-down " source={Triforce} />
          </View>
          <View className="mb-[20%]">
            <Text className="mb-4 text-4xl font-bold ">Ingrese sus datos</Text>

            <Input secure={false} placeholder={"Usuario"} password={false} change={handleEmailChange} />
            <Input secure={true} placeholder={"Contraseña"} password={true} change={handlePasswordChange} />
            <TouchableOpacity
              onPressIn={() => navigation.navigate("Tabs")}
              className="bg-[#435f9a] py-4 px-16 border-b-4 border-[#354b7a] rounded mb-20 items-center"
            >
              <Text className="font-bold text-stone-50">Iniciar sesion</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default Login;
