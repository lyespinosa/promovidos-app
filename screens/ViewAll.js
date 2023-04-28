import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Storage } from "expo-storage";

const ViewAll = () => {
  const [promotores, setPromotores] = useState([]);
  const [token, setToken] = useState(null);

  const getUser = async (user) => {
    console.log(user.id);
    fetch(`${BASE_URL}promotors/listar/${user.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPromotores(data);
        console.log(data)
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  };

  const navigation = useNavigation();
  let focusListener = null;
  useEffect(() => {
    focusListener = navigation.addListener('focus', () => {
        const data = async () => {
          getUser(JSON.parse(await Storage.getItem({ key: `user-data` })));
          console.log(BASE_URL)
        }
        data()
    });
    return function cleanUp() {
      focusListener.remove();
    };
  }, []);

  return (
    <ScrollView className="bg-white">
      <View className="bg-white min-h-[100vh] ">
        <View className="border-b border-[#E8E8E8]">
          <Navbar></Navbar>
        </View>
        <View className="bg-white flex-1 min-h-[100vh] justify-items-stretch px-6">
          {promotores.map((promotor) => {
            return (
              <Dropdown
                id={promotor.fkuser}
                showButton={true}
                key={promotor.idpromotor}
                Nombre={promotor.nombre}
                Municipio={promotor.fkmunicipio}
                Celular={promotor.celular}
                Estructura={promotor.estructura}
                Cargo={promotor.celular}
                Seccion={promotor.seccion}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewAll;
