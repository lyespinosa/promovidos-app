import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { Storage } from "expo-storage";

const ViewAll = () => {
  const [promotores, setPromotores] = useState([]);
  const [token, setToken] = useState(null);

  const getUser = async (user) => {
    console.log(user.id)
    fetch("http://192.168.1.131:8000/api/promotors/listar/"+user.id, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        setPromotores(data)
      })
      .catch(err =>{
        console.log('error: ' + err)
      })
  };

  useEffect( () => {
    const data = async () =>{

      getUser(JSON.parse(await Storage.getItem({ key: `user-data` }))) ;
      console.log(JSON.parse(await Storage.getItem({ key: `user-data` })))
    }
    data()
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
