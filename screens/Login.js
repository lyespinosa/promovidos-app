import { Image, Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import axios from "axios";
import { Storage } from "expo-storage";
import { Formik } from "formik";
import * as Yup from 'yup';

//assets
import { background } from "../assets";
import { Triforce } from "../assets";

//components
import Input from "../components/TextInputExample";
//import Alert from "../components/Alert";

//ENV
import { BASE_URL } from '@env'
import DefaultStyles from "../styles/DefaultStyles";


const Login = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const tokens = "";
  const [token, setToken] = useState(null);


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

  const saveToken = async (data) => {
    try{
      await Storage.setItem({
        key: `user-token`,
        value: JSON.stringify(data.msg)
      })
    } catch (error) {
      console.log('Error al guardar el token')
    }
  }

  const getUser = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      console.log(response.data)
      saveData(response.data)
    } catch (e) {
      console.log("Failed to get data");
    }
  };


  const getLogin = async (values, resetForm) => {
    setIsLoading(true)
    try {
      const response = await axios.post(`${BASE_URL}login`, values);
      setIsLoading(false)
      const data = response.data;
      if (data?.status == 1) {
        resetForm()
        Alert.alert('Sesion iniciada');
        saveToken(data)
        //setIsCorrect(true)
        console.log("Has iniciado");
        getUser(data.msg);
      } else {
        Alert.alert('Usuario incorrecto')
        console.log("Error al inicar");
        //setIsWrong(true)
      }

    } catch (error) {
      setIsLoading(false)
      Alert.alert('Error al iniciar sesion')
      console.error("EL ERROR ES ==> " + error);
    }

  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Ingresa un correo "@"').required('Required'),
    password: Yup.string().required('Required'),
  })

  return (
    <ScrollView className="bg-white">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={ async (values, { resetForm }) => {
          await getLogin(values, resetForm)
        }}
      >
        {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
          <View>
            <Image
              source={background} // Ruta de la imagen de fondo
              className="absolute top-0 bottom-0 left-0 right-0 w-full"
            />
            <KeyboardAwareScrollView>
              <View className="min-h-[100vh] flex-1 relative items-center py-8 justify-center mt-12">
                <View className="items-center bg-white w-96  h-[600px] rounded-3xl overflow-hidden relative ">
                  <View className="absolute bottom-8 rotate-[28deg]">
                    <Image className="object-scale-down " source={Triforce} />
                  </View>
                  <View className="items-center w-full h-full px-[5%]">
                    <View className="mt-6 rounded-md px-10 bg-[#dbc25f] justify-center py-2 w-full">
                      <Text className="text-3xl font-bold text-stone-50 ali">
                        Ingrese sus datos
                      </Text>
                    </View>

                    <View className="w-full mt-12">

                      <View style={DefaultStyles.viewInputLogin}>
                        <Input
                          placeholder="Correo electrónico"
                          change={handleChange('email')}
                          onBlur={() => setFieldTouched('email')}
                          value={values.email}
                        />
                        {touched.email && errors.email && (
                          <Text style={DefaultStyles.inputTextLogin} >{errors.email}</Text>
                        )}
                      </View>

                      <View style={DefaultStyles.viewInputLogin}>
                        <Input
                          placeholder="Contraseña"
                          change={handleChange('password')}
                          onBlur={() => setFieldTouched('password')}
                          value={values.password}
                          secure={true}
                        />
                        {touched.password && errors.password && (
                          <Text style={DefaultStyles.inputTextLogin} >{errors.password}</Text>
                        )}
                      </View>
                    </View>
                    <TouchableOpacity
                      onPressIn={handleSubmit}
                      className="bg-[#435f9a] py-3 px-14 items-center border-[#354b7a] rounded-md mb-20 w-full  mt-10"
                    >
                      <Text className="text-lg font-extrabold text-stone-50">
                        Iniciar sesion
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <StatusBar style="auto" />
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        )
        }
      </Formik >
    </ScrollView >
  );
};

export default Login;
