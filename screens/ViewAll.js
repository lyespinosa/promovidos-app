import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Storage } from "expo-storage";
import DefaultStyles from "../styles/DefaultStyles";

//Icons
import { Ionicons } from '@expo/vector-icons';



const ViewAll = () => {
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [refresh, setRefresh] = useState(false);

  const [promotores, setPromotores] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState('');



  const [userTipo, setUserTipo] = useState();
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const getUser = async (id, token) => {
    fetch(`${BASE_URL}promotors/listar/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPromotores(data);
        setTablaUsuarios(data);
        setIsLoading(false)
      })
      .catch((err) => {
      });
  };
  
  const handleTextChange=(text)=>{
    setBusqueda(text);
    filtrar(text);
  }

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaUsuarios.filter((elemento) =>
      (elemento.nombre?.toLowerCase() || "").includes(terminoBusqueda.toLowerCase()) ||
      (elemento.celular?.toLowerCase() || "").includes(terminoBusqueda.toLowerCase())
    );
    console.log("Busqueda:", resultadosBusqueda);
    setPromotores(resultadosBusqueda);
  };

  useEffect(()=>{
 getUser();
  },[])

  let focusListener = null;
  useEffect(() => {
    setIsLoading(true)
    focusListener = navigation.addListener("focus", () => {
      const data = async () => {
        const user = JSON.parse(await Storage.getItem({ key: `user-data` }));
        const token = JSON.parse(await Storage.getItem({ key: `user-token` }));
        const promotor = JSON.parse(await Storage.getItem({ key: `user-promotor` }));

        /*console.log("####################")
        console.log(user)
        console.log(token)
        console.log(promotor)
        console.log("####################")*/

        setUserTipo(promotor[0]?.fktipo);
        setToken(token);
        getUser(promotor[0]?.idpromotor, token);
      };
      data();

    });
    return function cleanUp() {
      focusListener.remove();
    };
  }, []);

  return (
    <View className="bg-white min-h-[100vh] ">

      <View className=" rounded-md  w-[95%] items-center mx-auto mt-4" style={{ backgroundColor: DefaultStyles.greenColor }}>
        <Text className="p-2 text-white text-[20px] ">{userTipo == 3 ? "Todos los promotores" : "Todos los promovidos"} </Text>
      </View>

      <View className="border-b border-[#E8E8E8]">
        <Navbar
        value={busqueda}
        handleTextChange={handleTextChange}
        />
        <View className="flex-row justify-end items-center pb-2 px-3">
          <TouchableOpacity
            onPress={() => { navigation.navigate('Insert') }}
            className=" w-16 h-12 shadow-sm shadow-black bg-gray-100 justify-center items-center rounded-md mx-2">
            <Ionicons name="save-sharp" size={28} color={DefaultStyles.greenColor} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Settings') }}
            className=" w-16 h-12 shadow-sm shadow-black bg-gray-100 justify-center items-center rounded-md mx-2">
            <Ionicons name="settings-sharp" size={28} color="#00416A" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="bg-white">
        <View className="justify-center min-h-[80vh] pb-80">
          {
            isLoading
              ?
              <ActivityIndicator size="large" color={DefaultStyles.greenColor} />
              : <>
                {
                  promotores.length > 0 ? (<>


                    {userTipo == 3 ? (
                      <View className="bg-white flex-1 min-h-[100vh] justify-items-stretch px-6">
                        {promotores.map((promotor) => {
                          return (
                            <Dropdown
                              token={token}
                              id={promotor.fkuser}
                              showButton={true}
                              key={promotor.idpromotor}
                              Nombre={promotor.nombre}
                              Municipio={promotor.municipio}
                              Celular={promotor.celular}
                              Estructura={promotor.estructura}
                              Cargo={promotor.celular}
                              Seccion={promotor.seccion}
                            />
                          );
                        })}
                      </View>
                    )
                      :
                      (
                        <View className="bg-white flex-1 min-h-[100vh] justify-items-stretch px-6">
                          {promotores.map((promotor) => {
                            return (
                              <Dropdown

                                showButton={true}
                                showModal={false}
                                key={promotor.idpromotor}
                                Nombre={promotor.nombre}
                                Municipio={promotor.municipio}
                                Celular={promotor.celular}
                                Estructura={promotor.estructura}
                                Cargo={promotor.celular}
                                Seccion={promotor.seccion}
                              />
                            );
                          })}
                        </View>
                      )
                    }
                  </>)
                    :
                    (
                      <View className="items-center justify-center flex-1">
                        <Text className="text-2xl font-semibold text-[#cecece]">{userTipo == 3 ? "Sin promotores" : "Sin promovidos"}</Text>
                      </View>
                    )
                }
              </>
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewAll;
