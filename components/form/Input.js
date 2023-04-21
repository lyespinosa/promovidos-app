import { View, Text, TextInput } from 'react-native'
import React from 'react'
import DefaultStyles from '../../styles/DefaultStyles'

const Input = ({ onChangeText, placeholder, style = DefaultStyles.input, value, keyboardType, maxLength, onBlur, autoCapitalize }) => {
    return (
        <TextInput
            autoCapitalize={autoCapitalize}
            className="border border-gray-600"
            style={style}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            maxLength={maxLength}
            keyboardType={keyboardType}
        />
    )
}

export default Input