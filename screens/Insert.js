import { View, Text, Button, TouchableOpacity, Image, TextInput, ScrollView, Switch } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SelectList } from "react-native-dropdown-select-list";

//styles
import DefaultStyles from "../styles/DefaultStyles";


const Insert = () => {
    const [image, setImage] = useState(null);
    const [cateogry, setCateogry]= useState("")
    const [nombre, setNombre] = useState("")
    const [paterno, setPaterno] = useState("")
    const [materno, setMaterno] = useState("")
    const [cp, setCp] = useState("")
    const [folio,setFolio] = useState("")
    const [curp,setCurp] = useState("")
    const [ine,setIne] = useState("")
    const [cargo,setCargo] = useState("")
    const [ocupacion,setOcupacion] = useState("")
    const [estructuras,setEstructura] = useState("")
    const [estado,setEstado] = useState("")
    const [municipios,setMunicipio] = useState("")
    const [localidad,setLocalidad] = useState("")
    const [colonia,setColonia] = useState("")
    const [direccion,setDireccion] = useState("")
    const [exterior,setExterior] = useState("")
    const [celular,setCelular] = useState("")
    const [correo,setCorreo] = useState("")
    const [seccion,setSeccion] = useState("")
    const [sexo,setSexo] = useState("")
    const [subCategory, setSubCategory] = useState("")
      const [response, setResponse] = useState("");
    
      const handleFolioChange = (folio) => {
        console.log(folio)
        setFolio(folio)
      };
      const handleIneChange = (ine) => {
        setIne(ine);
      };
    
      const handleSeccionChange = (seccion) => {
        setSeccion(seccion);
      };
      const handleEstrucuturaChange = (estructura) => {
        console.log(estructura)
        setEstructura(estructura);
      };
      const handleCargoChange = (cargo) => {
        setCargo(cargo);
      };
      const handleOcupacionChange = (ocupacion) => {
        setOcupacion(ocupacion);
      };
      const handleNombreChange = (nombre) => {
        setNombre(nombre);
      };
      const handlePaternoChange = (paterno) => {
        setPaterno(paterno);
      };
      const handleMaternoChange = (materno) => {
        setMaterno(materno);
      };
    
      const handleSexoChange = (sexo) => {
        setSexo(sexo);
      };
      const handleCurpChange = (curp) => {
        setCurp(curp);
      };
      const handleEstadoChange = (estado) => {
        setEstado(estado);
      };
      const handleMunicipioChange = (municipio) => {
        setMunicipio(municipio);
      };
      const handleLocalidadChange = (localidad) => {
        setLocalidad(localidad);
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
        console.log(correo)
      };
      const handleSubmit = () => {
        fetch('http://192.168.1.131:8000/api/promotors/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
        "folio": folio,
        "ine": ine,
        "seccion": 1,
        "estructura": 1,
        "cargo": cargo,
        "ocupacion": ocupacion,
        "nombre": nombre,
        "paterno": paterno,
        "materno": materno,
        "sexo": 1,
        "curp": curp,
        "estado": 1,
        "municipio": 2,
        "localidad": 1,
        "colonia": colonia,
        "direccion": direccion,
        "exterior": exterior,
        "cp": cp,
        "celular": celular,
        "correo": correo,
        "activo": 1,
        "usuario": 1
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});
      };


    const estructura = [
        { key: '1', value: 'Comitán' },
        { key: '2', value: 'Ocosingo' },
    ];

    const municipio = [
        { key: '1', value: 'Acala' },
        { key: '2', value: 'Arriaga' },
    ];

    const localidades = [
        { key: '1', value: 'Angel Albino Corzo' },
        { key: '2', value: 'Bellavista' },
    ];

    const sexoList = [
        { key: '1', value: 'Masculino' },
        { key: '2', value: 'Femenino' },
    ];

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

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

    return (
        <ScrollView >
            <View className="min-h-full bg-white relative items-center pt-4 pb-[200px] bg-">

                <View className=" rounded-md  w-[95%] bg-green-600" >

                    <Text className="p-2 text-white text-[20px] " >Agregar promovidos</Text>
                </View>

                <View className=" mt-4 flex-row justify-between w-[90%] ">

                    <View className=" h-[240px] justify-between mr-3 ">
                        <View className="w-[160px] h-[200px] bg-slate-500 rounded-md overflow-hidden shadow-sm shadow-black">
                            {image ? (
                                <Image className="w-full h-full object-contain" source={{ uri: image }} />
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
                        <View  >
                            <SelectList
                                data={sexoList}
                                search={false}
                                setSelected={setCateogry}
                                boxStyles={DefaultStyles.select}
                                dropdownStyles={DefaultStyles.inputColor}
                                placeholder="Sexo"
                                
                                
                            />
                        </View>

                    </View>

                </View>

                <View className="w-[90%]">
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
                    <View >
                        <SelectList
                            data={estructura}
                            search={false}
                            setSelected={handleEstrucuturaChange}
                            boxStyles={DefaultStyles.select}
                            dropdownStyles={DefaultStyles.inputColor}
                            placeholder="Estructura"
                        />
                    </View>
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
                    <View >
                        <SelectList
                            data={municipio}
                            search={false}
                            setSelected={handleMunicipioChange}
                            boxStyles={DefaultStyles.select}
                            dropdownStyles={DefaultStyles.inputColor}
                            placeholder="Municipio"
                        />
                    </View>
                    <View >
                        <SelectList
                            data={localidades}
                            search={false}
                            setSelected={handleLocalidadChange}
                            boxStyles={DefaultStyles.select}
                            dropdownStyles={DefaultStyles.inputColor}
                            placeholder="Localidades"                        />
                    </View>
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Colonia"
                        onChangeText={handleColoniaChange}
                        
                    />

                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Dirección"
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={handleDireccionChange}
                    />

                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Número exterior"
                        keyboardType="numeric"
                        numberOfLines={4}
                        onChangeText={handleExteriorChange}
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Código postal"
                        keyboardType="numeric"
                        onChangeText={handleCpChange}
                        
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Número celular"
                        keyboardType="numeric"
                        onChangeText={handleCelularChange}
                        
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Correo electrónico"
                        onChangeText={handleCorreoChange}
                       
                    />
                    <View
                        className="flex-row items-center justify-center bg-"
                        >
                        <Text className="text-[18px]">{isEnabled ? "Activo" : "Inactivo"}</Text>
                        <Switch
                            trackColor={{ false: '#bbbbbb', true: '#3cbe73' }}
                            thumbColor={isEnabled ? '#ffffff' : '#999999'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </View>

                    <TouchableOpacity
                        style={DefaultStyles.mt_8}
                        onPress={handleSubmit} //hacer el POST ahí
                        onPress={""} //hacer el POST ahí
                        className="bg-blue-500 m-auto px-14 py-4 rounded-md"
                    >
                        <Text className="font-semibold text-[24px] text-white">Agregar</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </ScrollView>

    );
};




export default Insert;
