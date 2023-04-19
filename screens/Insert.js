import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Switch, } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SelectList } from "react-native-dropdown-select-list";
import { AsyncStorage } from '@react-native-async-storage/async-storage';

import axios from "axios";

//styles
import DefaultStyles from "../styles/DefaultStyles";

//components
import ComboBox from "../components/form/ComboBox";
import Input from "../components/form/Input";
import { getList } from "../api/comboboxs/getList";


const Insert = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [sexosList, setSexosList] = useState([])
  const [municipiosList, setMunicipiosList] = useState([])
  const [estructurasList, setEstructurasList] = useState([])
  const [localidadesList, setLocalidadesList] = useState([])


  const [image, setImage] = useState(null);
  const [nombre, setNombre] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [cp, setCp] = useState("");
  const [folio, setFolio] = useState("");
  const [curp, setCurp] = useState("");
  const [ine, setIne] = useState("");
  const [cargo, setCargo] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [estado, setEstado] = useState("");
  const [colonia, setColonia] = useState("");
  const [direccion, setDireccion] = useState("");
  const [exterior, setExterior] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [seccion, setSeccion] = useState("");

  const [sexo, setSexo] = useState("");
  const [municipio, setMunicipio] = useState("")
  const [localidad, setLocalidades] = useState("")
  const [estructura, setEstructura] = useState("")


  const handleFolioChange = (folio) => {
    console.log(folio);
    setFolio(folio);
    const value = AsyncStorage.getItem('data')
    console.log('datos locales: ' + value)
  };
  const handleIneChange = (ine) => {
    setIne(ine);
  };

  const handleSeccionChange = (seccion) => {
    setSeccion(seccion);
  };
  const handleEstrucuturaChange = (estructura) => {
    console.log(estructura);
    setEstructuras(estructura);
  };
  const handleCargoChange = (cargo) => {
    setCargo(cargo);
  };
  const handleOcupacionChange = (ocupacion) => {
    setOcupacion(ocupacion);
  };
  const handleNombreChange = (nombre) => {
    setNombre(nombre);
    console.log(nombre)
  };
  const handlePaternoChange = (paterno) => {
    setPaterno(paterno);
  };
  const handleMaternoChange = (materno) => {
    setMaterno(materno);
  };

  const handleSexoChange = (sexo) => {
    setSexo(sexo);
    console.log(sexo)
  };
  const handleCurpChange = (curp) => {
    setCurp(curp);
  };
  const handleMunicipioChange = (municipio) => {
    setMunicipio(municipio);

    getList("localidad/"+municipio).then(data => {
      setLocalidadesList(data)
    })
  };
  const handleLocalidadChange = (localidad) => {
    setLocalidades(localidad);
    console.log(localidad)
  };
  const handleColoniaChange = (colonia) => {
    setColonia(colonia);
  };
  const handleDireccionChange = (direccion) => {
    setDireccion(direccion);
  };
  const handleExteriorChange = (exterior) => {
    setExterior(exterior);
  };
  const handleCpChange = (cp) => {
    setCp(cp);
  };
  const handleCelularChange = (celular) => {
    setCelular(celular);
  };
  const handleCorreoChange = (correo) => {
    setCorreo(correo);
    console.log(correo);
  };

  
  useEffect(() => {
    getList("sexo").then(data => {
      setSexosList(data)
    })

    getList("estructura").then(data => {
      setEstructurasList(data)
    })

    getList("municipio").then(data => {
      setMunicipiosList(data)
    })

  }, [])


  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.131:8000/api/promotors/create",
        {
          // Data to be sent to the server
          folio: folio,
          ine: ine,
          seccion: seccion,
          estructura: estructuras,
          cargo: cargo,
          ocupacion: ocupacion,
          nombre: nombre,
          paterno: paterno,
          materno: materno,
          sexo: sexo,
          curp: curp,
          estado: 1,
          municipio: municipios,
          localidad: localidad,
          colonia: colonia,
          direccion: direccion,
          exterior: exterior,
          cp: cp,
          celular: celular,
          correo: correo,
          activo: 1,
          usuario: 1,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
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

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const data = [
    { label: 'Tuxtla', value: '1' },
    { label: 'Chiapa', value: '2' },
    { label: 'Sancris', value: '3' },
    { label: 'Tonalá', value: '4' },
    { label: 'Arriaga', value: '5' },
    { label: 'Tapachula', value: '6' },
    { label: 'Huixtla', value: '7' },
    { label: 'Motozintl', value: '8' },
    { label: 'Tuxtla', value: '9' },
    { label: 'Chiapa', value: '10' },
    { label: 'Sancris', value: '11' },
    { label: 'Tonalá', value: '12' },
    { label: 'Arriaga', value: '13' },
    { label: 'Tapachula', value: '14' },
    { label: 'Huixtla', value: '15' },
    { label: 'Motozintl', value: '16' },

  ];

  return (
    <ScrollView>
      <View className="min-h-full bg-white relative items-center pt-4 pb-[200px]">
        <View className=" rounded-md  w-[95%] bg-green-600">
          <Text className="p-2 text-white text-[20px] ">
            Agregar promovidos
          </Text>
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

            <Input
              styles={DefaultStyles.firstInput}
              placeholder="Nombre"
              onChangeText={handleNombreChange}
            />
            <Input
              placeholder="Apellido paterno"
              onChangeText={handlePaternoChange}
            />

            <Input
              placeholder="Apellido materno"
              onChangeText={handleMaternoChange}
            />
            <Input
              placeholder="Número celular"
              keyboardType="numeric"
              onChangeText={handleCelularChange}
            />

          </View>
        </View>

        <View className="w-[90%]">

          <ComboBox
            showSearch={false}
            value={sexo}
            items={sexosList}
            placeholder={"Sexo"}
            onChange={item => { handleSexoChange(item.value) }}
          />
          <Input
            placeholder="Folio"
            onChangeText={handleFolioChange}
          />
          <Input
            placeholder="INE o Clave de elector"
            onChangeText={handleIneChange}
          />
          <Input
            placeholder="Seccion"
            onChangeText={handleSeccionChange}
          />
          <Input
            placeholder="CURP"
            maxLength={18}
            onChangeText={handleCurpChange}
          />
          <ComboBox
            value={estructura}
            items={estructurasList}
            placeholder={"Estructura"}
            onChange={item => { handleEstrucuturaChange(item.value) }}
          />
          <Input
            placeholder="Cargo"
            onChangeText={handleCargoChange}
          />
          <Input
            placeholder="Ocupacion"
            onChangeText={handleOcupacionChange}
          />
          <ComboBox
            value={municipio}
            items={municipiosList}
            placeholder={"Municipio"}
            onChange={item => { handleMunicipioChange(item.value) }}
          />
          <ComboBox
            value={localidad}
            items={localidadesList}
            placeholder={"Localidad"}
            onChange={item => { handleLocalidadChange(item.value) }}
          />
          <Input
            placeholder="Colonia"
            onChangeText={handleColoniaChange}
          />
          <Input
            placeholder="Dirección"
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            onChangeText={handleDireccionChange}
          />
          <Input
            placeholder="Número exterior"
            keyboardType="numeric"
            onChangeText={handleExteriorChange}
          />
          <Input
            placeholder="Código postal"
            keyboardType="numeric"
            maxLength={5}
            onChangeText={handleCpChange}
          />
          <Input
            placeholder="Correo electrónico"
            onChangeText={handleCorreoChange}
          />

          <View className="flex-row items-center justify-center bg-">
            <Text className="text-[18px]">
              {isEnabled ? "Activo" : "Inactivo"}
            </Text>
            <Switch
              trackColor={{ false: "#bbbbbb", true: "#3cbe73" }}
              thumbColor={isEnabled ? "#ffffff" : "#999999"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <TouchableOpacity
            style={DefaultStyles.mt_8}
            onPress={handleSubmit} //hacer el POST ahí
            className="py-4 m-auto bg-blue-500 rounded-md px-14"
          >
            <Text className="font-semibold text-[24px] text-white">
              Agregar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Insert;