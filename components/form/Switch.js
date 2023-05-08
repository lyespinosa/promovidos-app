import { View, Text } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector'
import DefaultStyles from '../../styles/DefaultStyles'


const Switch = ({onPress,}) => {
    return (
        <SwitchSelector
            style={[DefaultStyles.swithBorder]}
            initial={0}
            onPress={onPress}
            textColor={DefaultStyles.greenColor} //'#7a44cf'
            buttonColor={DefaultStyles.greenColor}
            borderColor={"#747474"}
            hasPadding
            options={[
                { label: "Activo", value: 1 }, //images.feminino = require('./path_to/assets/img/feminino.png')
                { label: "Inactivo", value: 0 } //images.masculino = require('./path_to/assets/img/masculino.png')
            ]}
            
        />
    )
}

export default Switch