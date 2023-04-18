import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Switch, } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SelectList } from "react-native-dropdown-select-list";


import axios from "axios";

//styles
import DefaultStyles from "../styles/DefaultStyles";

//components
import DropDown from "../components/DropDown";


const Insert = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [image, setImage] = useState(null);
  const [cateogry, setCateogry] = useState("");
  const [nombre, setNombre] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [cp, setCp] = useState("");
  const [folio, setFolio] = useState("");
  const [curp, setCurp] = useState("");
  const [ine, setIne] = useState("");
  const [cargo, setCargo] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [estructuras, setEstructuras] = useState("");
  const [estado, setEstado] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [colonia, setColonia] = useState("");
  const [direccion, setDireccion] = useState("");
  const [exterior, setExterior] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [seccion, setSeccion] = useState("");
  const [sexo, setSexo] = useState("");
  const [SexoData, setSexoData] = useState("");
  const [municipio, setMunicipio] = useState("")
  const [localidades, setLocalidades] = useState("")
  const [estructura, setEstructura] = useState("")

  const [selected, setSelected] = useState(null)

  const handleFolioChange = (folio) => {
    console.log(folio);
    setFolio(folio);
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
    /*setMunicipios(municipio);
    console.log(municipio)
    fetch("http://192.168.1.131:8000/api/localidad/" + municipio, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        setLocalidades(data)
      })*/
    setMunicipio(municipio);
    console.log(municipio)
  };
  const handleLocalidadChange = (localidad) => {
    setLocalidad(localidad);
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

  /* useEffect(() => {
     fetch("http://192.168.1.131:8000/api/sexo", {
       headers: {
         'Content-Type': 'application/json',
       }
     })
       .then(response => response.json())
       .then(data => {
         { console.log(data), setSexoData(data) }
       })
   }, [])
 
   useEffect(() => {
     fetch("http://192.168.1.131:8000/api/estructura", {
       headers: {
         'Content-Type': 'application/json',
       }
     })
       .then(response => response.json())
       .then(data => {
         setEstructura(data)
       })
   }, [])
 
   useEffect(() => {
     fetch("http://192.168.1.131:8000/api/municipio", {
       headers: {
         'Content-Type': 'application/json',
       }
     })
       .then(response => response.json())
       .then(data => {
         setMunicipio(data)
       })
   }, [])
 */

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
      <View className="min-h-full bg-white relative items-center pt-4 pb-[200px] bg-">
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
                  className="w-full h-full object-contain"
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

          <View className=" flex-1 ">

            <TextInput
              style={DefaultStyles.firstInput}
              placeholder="Nombre"
              onChangeText={handleNombreChange}
            />
            <TextInput
              style={DefaultStyles.input}
              placeholder="Apellido paterno"
              onChangeText={handlePaternoChange}
            />

            <TextInput
              style={DefaultStyles.input}
              placeholder="Apellido materno"
              onChangeText={handleMaternoChange}
            />
            <TextInput
              style={DefaultStyles.input}
              placeholder="Número celular"
              keyboardType="numeric"
              onChangeText={handleCelularChange}
            />

          </View>
        </View>

        <View className="w-[90%]">

          <DropDown
            value={sexo}
            items={data}
            placeholder={"Sexo"}
            onChange={item => { handleSexoChange(item.value) }}
          />

          <TextInput
            style={DefaultStyles.input}
            placeholder="Folio"
            onChangeText={handleFolioChange}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="INE o Clave de elector"
            onChangeText={handleIneChange}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="Seccion"
            onChangeText={handleSeccionChange}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="CURP"
            maxLength={18}
            onChangeText={handleCurpChange}
          />
          <DropDown
            value={estructuras}
            items={data}
            placeholder={"Estructura"}
            onChange={item => { handleEstrucuturaChange(item.value) }}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="Cargo"
            onChangeText={handleCargoChange}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="Ocupacion"
            onChangeText={handleOcupacionChange}
          />
          <DropDown
            value={municipio}
            items={data}
            placeholder={"Municipio"}
            onChange={item => { handleMunicipioChange(item.value) }}
          />
          <DropDown
            value={localidad}
            items={data}
            placeholder={"Localidad"}
            onChange={item => { handleLocalidadChange(item.value) }}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="Colonia"
            onChangeText={handleColoniaChange}
          />
          <TextInput
            className=""
            style={DefaultStyles.input}
            placeholder="Dirección"
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            onChangeText={handleDireccionChange}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="Número exterior"
            keyboardType="numeric"
            onChangeText={handleExteriorChange}
          />
          <TextInput
            style={DefaultStyles.input}
            placeholder="Código postal"
            keyboardType="numeric"
            maxLength={5}
            onChangeText={handleCpChange}
          />
          <TextInput
            style={DefaultStyles.input}
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
            className="bg-blue-500 m-auto px-14 py-4 rounded-md"
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