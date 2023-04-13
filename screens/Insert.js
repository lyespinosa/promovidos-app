import { View, Text, Button, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SelectList } from "react-native-dropdown-select-list";
import DefaultStyles from "../styles/DefaultStyles";

const Insert = () => {
    const [image, setImage] = useState(null);
    const [cateogry, setCateogry] = useState("")
    const [subCategory, setSubCategory] = useState("")

    const categories = [
        { key: 'P', value: 'Primero' },
        { key: 'S', value: 'Segundo' },
        { key: 'T', value: 'Tercero' },
        { key: 'P', value: 'Primero' },
        { key: 'S', value: 'Segundo' },
        { key: 'T', value: 'Tercero' },
        { key: 'P', value: 'Primero' },
        { key: 'S', value: 'Segundo' },
        { key: 'T', value: 'Tercero' },
    ];

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
            <View className="flex-1 bg-[#f2f2f2] relative items-center py-8">
                <View className="bg-emerald-700 rounded-md mt-10 w-[95%]" >
                    <Text className="p-2 text-white text-[20px]" >Agregar promovidos</Text>
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

                    <View className="justify-between flex-1 ">
                        <TextInput
                            style={DefaultStyles.input}
                            className="w-full border-[#686868] border-[1px]"
                            placeholder="Nombre"
                        />
                        <TextInput
                            style={DefaultStyles.input}
                            className="w-full border-[#686868] border-[1px]"
                            placeholder="Apellido paterno"
                        />
                        <TextInput
                            style={DefaultStyles.input}
                            className="w-full border-[#686868] border-[1px]"
                            placeholder="Apellido materno"
                        />
                        <TextInput
                            style={DefaultStyles.input}
                            className="w-full border-[#686868] border-[1px]"
                            placeholder="Edad"
                            keyboardType="numeric"
                        />

                    </View>

                </View>

                <View className="w-[90%]">
                    <TextInput
                        style={[DefaultStyles.input, DefaultStyles.mt_8]}
                        className="w-full border-[#686868] border-[1px]"
                        placeholder="Folio"
                    />
                    <TextInput
                        style={[DefaultStyles.input, DefaultStyles.mt_8]}
                        className="w-full border-[#686868] border-[1px]"
                        placeholder="INE o Clave de elector"
                    />
                    <TextInput
                        style={[DefaultStyles.input, DefaultStyles.mt_8]}
                        className="w-full border-[#686868] border-[1px]"
                        placeholder="Seccion"
                    />
                    <TextInput
                        style={[DefaultStyles.input, DefaultStyles.mt_8]}
                        className="w-full border-[#686868] border-[1px]"
                        placeholder="CURP"
                    />
                    <View style={[DefaultStyles.mt_8]}>
                        <SelectList
                        boxStyles={{backgroundColor:'rgb(248,250,252)'}}
                        dropdownStyles={{backgroundColor:'rgb(248,250,252)'}}
                            setSelected={setCateogry}
                            data={categories}
                            placeholder={"Estructura"}
                            defaultOption={{ key: 'S', value: 'Segundo' }}
                        />
                    </View>
                    <TextInput
                        style={[DefaultStyles.input, DefaultStyles.mt_8]}
                        className="w-full border-[#686868] border-[1px]"
                        placeholder="Cargo"
                        
                    />
                    <TextInput
                        style={[DefaultStyles.input, DefaultStyles.mt_8]}
                        className="w-full border-[#686868] border-[1px]"
                        placeholder="Ocupacion"
                    />
                    <View style={[DefaultStyles.mt_8]}>
                        <SelectList
                        boxStyles={{backgroundColor:'rgb(248,250,252)'}}
                        dropdownStyles={{backgroundColor:'rgb(248,250,252)'}}
                            setSelected={setCateogry}
                            data={categories}
                            placeholder={"Municipio"}
                            defaultOption={{ key: 'S', value: 'Segundo' }}
                        />
                    </View>
                    <View style={[DefaultStyles.mt_8]}>
                        <SelectList
                        boxStyles={{backgroundColor:'rgb(248,250,252)'}}
                        dropdownStyles={{backgroundColor:'rgb(248,250,252)'}}
                            setSelected={setCateogry}
                            data={categories}
                            placeholder={"Localidad"}
                            defaultOption={{ key: 'S', value: 'Segundo' }}
                        />
                    </View>

                </View>



            </View>
        </ScrollView>

    );
};


export default Insert;
