import React from "react";
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TextInputExample = ({ secure, password, placeholder, change, classname, onFocus, onBlur, value }) => {

  const [focus, setFocus] = useState(false);

  const [isSecure, setIsSecure] = useState(secure);


  return (

    <View className={` w-full h-10 bg-white rounded-md flex-row items-center border-2 border-[#67b99a]  `} >
      <TextInput
        className={`flex-1 px-3 text-xl text-gray-600 `}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={change}
        secureTextEntry={isSecure}
        placeholder={placeholder}
        value={value}
        password={password}
      />
      {secure &&
          <Icon
          className="bg-[#67b99a] text-center py-2 w-[10%]"
            onPress={() => setIsSecure(!isSecure)}
            name={isSecure ? "eye" : 'eye-slash'}
            size={20}
            color='#ffffff'

          />
      }
    </View>
  );
};


export default TextInputExample;
