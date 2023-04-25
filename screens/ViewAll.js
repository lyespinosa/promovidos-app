import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { BASE_URL } from '@env'
import { useNavigation } from '@react-navigation/native';
import { Storage } from "expo-storage";

const ViewAll = () => {
  const [promotores, setPromotores] = useState([]);
  const [token, setToken] = useState(null);

  const getUser = async (user) => {
    console.log(user.id)
    fetch(`http://192.168.100.55:8000/api/promotors/listar/` + user.id, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        setPromotores(data)
      })
      .catch(err => {
        console.log('error: ' + err)
      })
  };

  const navigation = useNavigation();
  let focusListener = null
  useEffect(() => {
    focusListener = navigation.addListener('focus', () => {
        const data = async () => {
          getUser(JSON.parse(await Storage.getItem({ key: `user-data` })));
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
        <Navbar></Navbar>
        <View className="bg-white flex-1 min-h-[100vh] justify-items-stretch px-6">
          {promotores.map((promotor) => {
            return <Dropdown key={promotor.idpromotor} data={promotor} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewAll;
