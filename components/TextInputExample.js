import React from "react";
import { useState } from 'react';
import { TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TextInputExample = ({ secure, password, placeholder}) => {
    
    const [focus, setFocus] = useState(false);

    const [isSecure, setIsSecure] = useState(secure);


  return (
    
    <View className=" font-bold p-x mb-4 w-80 bg-white rounded flex-row items-center border-[1px] border-gray-500  focus:border-y-lime-700 " >
    <TextInput
        className="flex-1 px-3 py-1 text-xl text-white"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={isSecure}
        placeholder={placeholder}
        password={password}
    />
    {secure &&
        <Icon
            style={{ paddingRight: 15 }}
            name={isSecure ? "eye" : 'eye-slash'}
            size={20}
            color='gray'
            onPress={() => setIsSecure(!isSecure)}
        />
    }
</View>
  );
};


export default TextInputExample;
