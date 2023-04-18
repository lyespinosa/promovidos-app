import { View, Text, TextInput } from 'react-native'
import React from 'react'
import DefaultStyles from '../../styles/DefaultStyles'

const Input = ({onChangeText, placeholder, styles = DefaultStyles.input }) => {
    return (
        <TextInput
            style={styles}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

export default Input