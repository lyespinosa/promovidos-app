import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Storage } from "expo-storage";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from 'yup';

//icons
import { Ionicons } from '@expo/vector-icons';

//styles
import DefaultStyles from "../styles/DefaultStyles";

//components
import ComboBox from "../components/form/ComboBox";
import Input from "../components/form/Input";
import Alert from "../components/Alert";
import Switch from "../components/form/Switch";

//api
import { getList } from "../api/comboboxs/getList";

//ENV
import { BASE_URL } from '@env'

const Insert = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [token, setToken] = useState()
  const [userId, setUserId] = useState()
  const [userTipo, setUserTipo] = useState()


  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [isError, setIsError] = useState(false)
  const [msgWrong, setMsgWrong] = useState('')

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [image, setImage] = useState()
  const [sexosList, setSexosList] = useState([])
  const [municipiosList, setMunicipiosList] = useState([])
  const [estructurasList, setEstructurasList] = useState([])
  const [localidadesList, setLocalidadesList] = useState([])
  const [municipio, setMunicipio] = useState("")
  const [imageName, setImageName] = useState('')

  useEffect(() => {

    const data = async () => {
      const id = JSON.parse(await Storage.getItem({ key: `user-data` })).id.toString();
      const token = JSON.parse(await Storage.getItem({ key: `user-token` }));
      const promotor = JSON.parse(await Storage.getItem({ key: `user-promotor` }));

      setUserId(id)
      setToken(token);
      setUserTipo(promotor[0]?.fktipo);


      getList("sexo", token).then(data => {
        setSexosList(data)
      })

      getList("estructura", token).then(data => {
        setEstructurasList(data)
      })

      getList("municipio", token).then(data => {
        setMunicipiosList(data)
      })

    }
    data()


  }, [])

  const getLocalidadByMunicipio = (municipio) => {
    setMunicipio(municipio);

    getList("localidad/" + municipio, token).then(data => {
      setLocalidadesList(data)
    })
  };

  const sendPromovido = async (values) => {
    try {
      const response = await axios.post(`${BASE_URL}promotors/create`,
        values
        , {
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
          }
        }
      );

      if (response?.data?.status == 1) {
        setIsCorrect(true)
      }
      else {
        setIsWrong(true)
        setMsgWrong(response?.data?.msg)
      }

    } catch (error) {
      setIsError(true)
    }


  };



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const schemaPromotor = Yup.object().shape({
    nombre: Yup.string().required('Required'),
    paterno: Yup.string().required('Required'),
    materno: Yup.string().required('Required'),
    celular: Yup.string().min(10, 'Deben ser 10 dígitos').max(10, 'Deben ser 10 dígitos').matches(/^[0-9]+$/, 'Solo números').required('Required'),
    sexo: Yup.number().integer("solo id").required('Required'),
    folio: Yup.string().required('Required'),
    ine: Yup.string().required('Required'),
    seccion: Yup.number().required('Required'),
    curp: Yup.string().min(18, 'Deben ser 18 dígitos').max(18, 'Deben ser 18 dígitos').required('Required'),
    estructura: Yup.number().integer("solo id").required('Required'),
    cargo: Yup.string().required('Required'),
    ocupacion: Yup.string().required('Required'),
    municipio: Yup.number().integer("solo id").required('Required'),
    localidad: Yup.number().integer("solo id").required('Required'),
    colonia: Yup.string().required('Required'),
    direccion: Yup.string().required('Required'),
    exterior: Yup.string().required('Required'),
    cp: Yup.string().required('Required'),
    promotor: Yup.string(),
    email: Yup.string().email('Ingresa un correo "@"').required('Required'),
    activo: Yup.boolean(),
    password: Yup.string().min(6, "Al menos 6 caracteres").required('Required'),
    confirmPassword: Yup.string().min(6, "Al menos 6 caracteres").oneOf([Yup.ref('password')], 'Las contraseñas no coinciden').required('required')
  })

  const SchemaPromovido = Yup.object().shape({
    nombre: Yup.string().required('Required'),
    paterno: Yup.string().required('Required'),
    materno: Yup.string().required('Required'),
    celular: Yup.string().min(10, 'Deben ser 10 dígitos').max(10, 'Deben ser 10 dígitos').matches(/^[0-9]+$/, 'Solo números').required('Required'),
    sexo: Yup.number().integer("solo id").required('Required'),
    folio: Yup.string().required('Required'),
    ine: Yup.string().required('Required'),
    seccion: Yup.number().required('Required'),
    curp: Yup.string().min(18, 'Deben ser 18 dígitos').max(18, 'Deben ser 18 dígitos').required('Required'),
    estructura: Yup.number().integer("solo id").required('Required'),
    cargo: Yup.string().required('Required'),
    ocupacion: Yup.string().required('Required'),
    municipio: Yup.number().integer("solo id").required('Required'),
    localidad: Yup.number().integer("solo id").required('Required'),
    colonia: Yup.string().required('Required'),
    direccion: Yup.string().required('Required'),
    exterior: Yup.string().required('Required'),
    cp: Yup.string().required('Required'),
    promotor: Yup.string(),
    email: Yup.string().email('Ingresa un correo "@"').required('Required'),
    activo: Yup.boolean(),
  })

  return (
    <ScrollView>

      <Formik
        initialValues={{
          imagen: imageName,
          nombre: '',
          paterno: '',
          materno: '',
          celular: '',
          sexo: null,
          folio: '',
          ine: '',
          seccion: null,
          curp: '',
          estructura: null,
          cargo: '',
          ocupacion: '',
          municipio: null,
          estado: 1,
          localidad: null,
          colonia: '',
          direccion: '',
          exterior: '',
          cp: '',
          promotor: '',
          activo: 0,
          email: '',
          password: ''
        }}
        validationSchema={userTipo == 3 ? schemaPromotor : SchemaPromovido}
        onSubmit={async (values, { resetForm }) => {
          await sendPromovido(values)
        }}
      >
        {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
          <View className="min-h-full bg-white relative items-center pt-4 pb-[200px]">
            <Alert text={"Registro creado correctamente"} buttonText={"Aceptar"} show={isCorrect} onConfirmPressed={() => setIsCorrect(false)} />
            <Alert text={msgWrong ? msgWrong : "Datos incorrectos"} buttonText={"Aceptar"} buttonColor="#d61d00" textColor="#d61d00" show={isWrong} onConfirmPressed={() => setIsWrong(false)} />
            <Alert text={"Error de conexion"} buttonText={"Aceptar"} buttonColor="#d61d00" textColor="#d61d00" show={isError} onConfirmPressed={() => setIsError(false)} />
            <View className=" rounded-md  w-[95%] bg-green-600 items-center">
              <Text className="p-2 text-white text-[20px] ">{userTipo == 3 ? "Agregar nuevo promotor" : "Agregar nuevo promovido"} </Text>
            </View>

            <View className=" mt-4 flex-row justify-between w-[90%] ">
              <View className=" h-[240px] justify-between mr-3 ">
                <View className="w-[160px] h-[200px] bg-slate-500 rounded-md overflow-hidden shadow-sm shadow-black">
                  {image ? (
                    <Image
                      className="object-contain w-full h-full"
                      source={{ uri: image }}
                    />
                  ) : (
                    <></>
                  )}
                </View>

                <TouchableOpacity
                  className="bg-blue-500 p-2 rounded-md border-[2px] border-gray-200"
                  value=""
                  onPress={pickImage}
                >
                  <Text className="text-white">Select a image </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-1 ">

                <View style={DefaultStyles.firstViewInput}>
                  <Input
                    placeholder="Nombre"
                    onChangeText={handleChange('nombre')}
                    onBlur={() => setFieldTouched('nombre')}
                    value={values.nombre}
                  />
                  {touched.nombre && errors.nombre && (
                    <Text style={DefaultStyles.inputText} >{errors.nombre}</Text>
                  )}
                </View>

                <View style={DefaultStyles.viewInput}>
                  <Input
                    placeholder="Apellido paterno"
                    onChangeText={handleChange('paterno')}
                    onBlur={() => setFieldTouched('paterno')}
                    value={values.paterno}
                  />
                  {touched.paterno && errors.paterno && (
                    <Text style={DefaultStyles.inputText} >{errors.paterno}</Text>
                  )}
                </View>

                <View style={DefaultStyles.viewInput}>
                  <Input
                    placeholder="Apellido materno"
                    onChangeText={handleChange('materno')}
                    onBlur={() => setFieldTouched('materno')}
                    value={values.materno}
                  />
                  {touched.materno && errors.materno && (
                    <Text style={DefaultStyles.inputText} >{errors.materno}</Text>
                  )}
                </View>

                <View style={DefaultStyles.viewInput}>
                  <Input
                    placeholder="Número celular"
                    keyboardType="numeric"
                    onChangeText={handleChange('celular')}
                    onBlur={() => setFieldTouched('celular')}
                    value={values.celular}
                    maxLength={10}
                  />
                  {touched.celular && errors.celular && (
                    <Text style={DefaultStyles.inputText} >{errors.celular}</Text>
                  )}
                </View>

              </View>
            </View>

            <View className="w-[90%] items-center">

              <View style={DefaultStyles.viewInput}>
                <ComboBox
                  showSearch={false}
                  items={sexosList}
                  placeholder={"Sexo"}
                  onChange={item => {
                    const value = item.value.toString();
                    handleChange("sexo")(value)
                  }
                  }
                  onBlur={() => setFieldTouched('sexo')}

                />
                {touched.sexo && errors.sexo && (
                  <Text style={DefaultStyles.inputText} >{errors.sexo}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Folio"
                  onChangeText={handleChange('folio')}
                  onBlur={() => setFieldTouched('folio')}
                  value={values.folio}
                />
                {touched.folio && errors.folio && (
                  <Text style={DefaultStyles.inputText} >{errors.folio}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="INE o Clave de elector"
                  onChangeText={handleChange('ine')}
                  onBlur={() => setFieldTouched('ine')}
                  value={values.ine}
                />
                {touched.ine && errors.ine && (
                  <Text style={DefaultStyles.inputText} >{errors.ine}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Seccion"
                  onChangeText={handleChange('seccion')}
                  onBlur={() => setFieldTouched('seccion')}
                  value={values.seccion}
                  keyboardType={"numeric"}
                />
                {touched.seccion && errors.seccion && (
                  <Text style={DefaultStyles.inputText} >{errors.seccion}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  autoCapitalize={'characters'}
                  placeholder="CURP"
                  maxLength={18}
                  onChangeText={handleChange('curp')}
                  onBlur={() => setFieldTouched('curp')}
                  value={values.curp}
                />
                {touched.curp && errors.curp && (
                  <Text style={DefaultStyles.inputText} >{errors.curp}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <ComboBox
                  items={estructurasList}
                  placeholder={"Estructura"}
                  onChange={item => {
                    const value = item.value.toString();
                    handleChange("estructura")(value)
                    handleChange("promotor")(userId)
                  }
                  }
                  onBlur={() => setFieldTouched('estructura')}
                />
                {touched.estructura && errors.estructura && (
                  <Text style={DefaultStyles.inputText} >{errors.estructura}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Cargo"
                  onChangeText={handleChange('cargo')}
                  onBlur={() => setFieldTouched('cargo')}
                  value={values.cargo}
                />
                {touched.cargo && errors.cargo && (
                  <Text style={DefaultStyles.inputText} >{errors.cargo}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Ocupacion"
                  onChangeText={handleChange('ocupacion')}
                  onBlur={() => setFieldTouched('ocupacion')}
                  value={values.ocupacion}
                />
                {touched.ocupacion && errors.ocupacion && (
                  <Text style={DefaultStyles.inputText} >{errors.ocupacion}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <ComboBox
                  items={municipiosList}
                  placeholder={"Municipio"}
                  onChange={item => {
                    getLocalidadByMunicipio(item.value)
                    const value = item.value.toString();
                    handleChange("municipio")(value)
                  }
                  }
                  onBlur={() => setFieldTouched('municipio')}
                />
                {touched.municipio && errors.municipio && (
                  <Text style={DefaultStyles.inputText} >{errors.municipio}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <ComboBox
                  items={localidadesList}
                  placeholder={"Localidad"}
                  onChange={item => {
                    const value = item.value.toString();
                    handleChange("localidad")(value)
                  }
                  }
                  onBlur={() => setFieldTouched('localidad')}
                />
                {touched.localidad && errors.localidad && (
                  <Text style={DefaultStyles.inputText} >{errors.localidad}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Colonia"
                  onChangeText={handleChange('colonia')}
                  onBlur={() => setFieldTouched('colonia')}
                  value={values.colonia}
                />
                {touched.colonia && errors.colonia && (
                  <Text style={DefaultStyles.inputText} >{errors.colonia}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Dirección"
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top"
                  onChangeText={handleChange('direccion')}
                  onBlur={() => setFieldTouched('direccion')}
                  value={values.direccion}
                />
                {touched.direccion && errors.direccion && (
                  <Text style={DefaultStyles.inputText} >{errors.direccion}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Número exterior"
                  keyboardType="numeric"
                  onChangeText={handleChange('exterior')}
                  onBlur={() => setFieldTouched('exterior')}
                  value={values.exterior}
                />
                {touched.exterior && errors.exterior && (
                  <Text style={DefaultStyles.inputText} >{errors.exterior}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Código postal"
                  keyboardType="numeric"
                  maxLength={5}
                  onChangeText={handleChange('cp')}
                  onBlur={() => setFieldTouched('cp')}
                  value={values.cp}
                />
                {touched.cp && errors.cp && (
                  <Text style={DefaultStyles.inputText} >{errors.cp}</Text>
                )}
              </View>

              <View style={DefaultStyles.viewInput}>
                <Input
                  placeholder="Correo electrónico"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={DefaultStyles.inputText} >{errors.email}</Text>
                )}
              </View>

              {
                userTipo == 3 && (
                  <>

                    <View style={DefaultStyles.viewInput}>
                      <Input
                        placeholder="Contraseña"
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        value={values.password}
                        secureTextEntry={true}
                      />
                      {touched.password && errors.password && (
                        <Text style={DefaultStyles.inputText} >{errors.password}</Text>
                      )}
                    </View>

                    <View style={DefaultStyles.viewInput}>
                      <Input
                        placeholder="Confirmar contraseña"
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={() => setFieldTouched('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry={true}
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <Text style={DefaultStyles.inputText} >{errors.confirmPassword}</Text>
                      )}
                    </View>
                  </>
                )

              }

              <View style={DefaultStyles.viewInput}>
                <Switch onPress={value => {
                  const activo = value.toString();
                  handleChange("activo")(activo)
                }} />
              </View>


              <View style={DefaultStyles.viewInput}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  disabled={!isValid}
                  style={[DefaultStyles.submitInput, !isValid && DefaultStyles.disable,]}
                  onPress={handleSubmit} //hacer el POST ahí
                  className="py-4 m-auto bg-blue-500 rounded-md px-14"
                >
                  <Text className="font-semibold text-[24px] text-white">
                    Agregar
                  </Text>
                </TouchableOpacity>
                {!isValid &&
                  <Text style={DefaultStyles.inputTextButton} > <Ionicons name="alert-circle-outline" size={18} color={DefaultStyles.inputTextColor} /> Campos faltantes </Text>
                }
              </View>


            </View>
          </View>
        )}
      </Formik>
    </ScrollView >
  );
};

export default Insert;