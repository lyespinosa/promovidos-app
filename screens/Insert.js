import { View, Text, Button, TouchableOpacity, Image, TextInput, ScrollView, Switch } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SelectList } from "react-native-dropdown-select-list";
import DefaultStyles from "../styles/DefaultStyles";
import { NativeWindStyleSheet } from "nativewind";
import { s } from "react-native-wind";

const Insert = () => {
    const [image, setImage] = useState(null);
    const [cateogry, setCateogry] = useState("")
    const [subCategory, setSubCategory] = useState("")



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
        { key: 'H', value: 'Masculino' },
        { key: 'F', value: 'Femenino' },
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
                        />
                        <TextInput
                            style={DefaultStyles.input}
                            placeholder="Apellido paterno"
                        />
                        <TextInput
                            style={DefaultStyles.input}
                            placeholder="Apellido materno"
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
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="INE o Clave de elector"
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Seccion"
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="CURP"
                        maxLength={18}
                    />
                    <View >
                        <SelectList
                            data={estructura}
                            search={false}
                            setSelected={setCateogry}
                            boxStyles={DefaultStyles.select}
                            dropdownStyles={DefaultStyles.inputColor}
                            placeholder="Estructura"
                        />
                    </View>
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Cargo"

                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Ocupacion"
                    />
                    <View >
                        <SelectList
                            data={municipio}
                            search={false}
                            setSelected={setCateogry}
                            boxStyles={DefaultStyles.select}
                            dropdownStyles={DefaultStyles.inputColor}
                            placeholder="Municipio"
                        />
                    </View>
                    <View >
                        <SelectList
                            data={localidades}
                            search={false}
                            setSelected={setCateogry}
                            boxStyles={DefaultStyles.select}
                            dropdownStyles={DefaultStyles.inputColor}
                            placeholder="Localidades"
                        />
                    </View>
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Colonia"
                    />

                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Dirección"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Número"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Código postal"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Número celular"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={DefaultStyles.input}
                        placeholder="Correo electrónico"
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
