import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Storage } from "expo-storage";

const ViewAll = () => {
  const [promotores, setPromotores] = useState([]);
  const [userTipo, setUserTipo] = useState();
  const [token, setToken] = useState(null);

  const getUser = async (user, token) => {
    fetch(`${BASE_URL}promotors/listar/${user.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPromotores(data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  };

  const navigation = useNavigation();
  let focusListener = null;
  useEffect(() => {
    focusListener = navigation.addListener("focus", () => {
      const data = async () => {
        const user = JSON.parse(await Storage.getItem({ key: `user-data` }));
        const token = JSON.parse(await Storage.getItem({ key: `user-token` }));
        const promotor = JSON.parse(
          await Storage.getItem({ key: `user-promotor` })
        );
        console.log("PROMOTOR DATA ==> ")
        console.log(promotor[0]?.fktipo)
        setUserTipo(promotor[0]?.fktipo);
        setToken(token);
        getUser(user, token);
      };
      data();
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
        { userTipo == 3 ? (
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
                  token={token}
                  id={promotor.fkuser}
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
      </View>
    </ScrollView>
  );
};

export default ViewAll;
