import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";


const ViewAll = () => {

  const [promotores, setPromotores] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.131:8000/api/promotors", {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        setPromotores(data)
  })},[])




  return (
    <ScrollView className="bg-white">
      <View className="bg-white min-h-[100vh] ">
        <Navbar></Navbar>
        <View className="bg-white flex-1 min-h-[100vh] justify-items-stretch px-6">

        {promotores.map(promotor => {
                return (
          <Dropdown key={promotor.idpromotor}  data={promotor} />
          )
        })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewAll;
