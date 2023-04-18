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
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const Login = () => {
  const navigation = useNavigation();

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
          <Image className=" object-scale-down" source={Triforce} />
        </View>
        <View className="mb-[20%]">
        <Text className="    font-bold mb-4 text-4xl">Ingrese sus datos</Text>
        <Input secure={false} placeholder={"Usuario"} password={false} />
        <Input secure={true} placeholder={"Contraseña"} password={true} />  
        
        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          className="bg-[#435f9a] py-4 px-16 border-b-4 border-[#354b7a] rounded mb-20 items-center"
        >
          <Text className=" text-stone-50 font-bold">Iniciar sesion</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />   
        </View>

        </View>      
        </KeyboardAwareScrollView>

    </ScrollView>
  );
};

export default Login;
