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
import { login } from "../api/users/login";
import { getUser } from "../api/users/getUser";
import { getOwnPromotor } from "../api/promotors/getOwnPromotor";


const Login = () => {

  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const saveData = async (data) => {
    try {
      await Storage.setItem({
        key: `user-data`,
        value: JSON.stringify(data)
      })
      navigation.navigate("Tabs")
    } catch (error) {
    }
  };

  const saveToken = async (data) => {
    try {
      await Storage.setItem({
        key: `user-token`,
        value: JSON.stringify(data)
      })
    } catch (error) {
    }
  }

  const savePromotor = async (data) => {
    try {
      await Storage.setItem({
        key: `user-promotor`,
        value: JSON.stringify(data)
      })
    } catch (error) {
    }
  }

const handlePromotor =  (id, token) => {
  
  getOwnPromotor(token, id).then(data => {
    savePromotor(data)
    navigation.navigate('Tabs')
  })
};

const handleUser =  (token) => {

  getUser(token).then(data => {
    console.log(data)
    saveData(data)
    handlePromotor(data.id, token);
  })

};

const handleLogin = (values, resetForm) => {
  setIsLoading(true)

  login(values).then(data => {
    setIsLoading(false)
    if (data?.status == 1) {
      //setIsCorrect(true)
      resetForm()
      saveToken(data.msg)
      handleUser(data.msg);
      Alert.alert('Sesion iniciada');
    }
    else if (data?.status == 0) {
      Alert.alert('Usuario incorrecto')
      //setIsWrong(true)
    }
    else if (data?.status == null) {
      Alert.alert('Error al iniciar sesion')
    }
    else {
      Alert.alert('Error desconocido')
    }

  })

};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Ingresa un correo "@"').required('Required'),
  password: Yup.string().required('Required'),
})

return (
  <ScrollView className="bg-black">
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={ (values, { resetForm }) => {
        handleLogin(values, resetForm)
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
              <View className="items-center bg-[#121212cc] w-96  py-8 rounded-3xl overflow-hidden relative ">

                <View className="items-center w-full  px-[5%]">
                  <View className="justify-center w-full px-10 py-2 rounded-md">
                    <Text className="text-3xl font-bold text-center text-stone-50">
                      Iniciar Sesion
                    </Text>
                  </View>

                  <View className="w-full ">

                    <View style={DefaultStyles.viewInputLogin}>
                      <Input
                        placeholder="Correo electrónico"
                        change={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        value={values.email}
                        autoCapitalize={"none"}
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
                    disabled={isLoading}
                    onPressIn={handleSubmit}
                    style={[DefaultStyles.submitInput, isLoading && DefaultStyles.disable,]}
                    className="bg-[#047857] py-3 px-14 items-center rounded-md  w-full  mt-10"
                  >
                    <Text className="text-lg font-extrabold text-stone-50">
                      Iniciar sesion
                    </Text>
                  </TouchableOpacity>
                </View>

                <StatusBar style="light" />
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
