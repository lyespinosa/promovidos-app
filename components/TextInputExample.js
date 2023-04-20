import React from "react";
import { useState } from 'react';
import { TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TextInputExample = ({ secure, password, placeholder, change, classname}) => {
    
    const [focus, setFocus] = useState(false);

    const [isSecure, setIsSecure] = useState(secure);


  return (
    
    <View className={` p-x mb-4 w-80 bg-white rounded-full flex-row items-center border border-gray-400  focus:shadow-md focus:border-[#354b7a] ${classname} `} >
    <TextInput
        className={`flex-1 px-3 py-1 text-xl  text-gray-600 `}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={change}
        secureTextEntry={isSecure}
        placeholder={placeholder}
        password={password}
    />
    {secure &&
        <Icon
            style={{ paddingRight: 15 }}
            name={isSecure ? "eye" : 'eye-slash'}
            size={20}
            color='#bc9c64'
            onPress={() => setIsSecure(!isSecure)}
        />
    }
</View>
  );
};


export default TextInputExample;
