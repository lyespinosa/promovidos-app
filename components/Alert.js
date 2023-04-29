import { View, Text } from 'react-native'
import React from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';

const Alert = ({text, buttonText = "Aceptar", textColor = "#006fff", buttonColor = "#006fff", show = false, showProgress=false, showButton=true, onConfirmPressed, onCancelPressed}) => {
    return (
        <AwesomeAlert
            show={show}
            showProgress={showProgress}
            title={text}
            titleStyle={{color: textColor}}
            closeOnTouchOutside={true}
            showConfirmButton={showButton}
            confirmText={buttonText}
            confirmButtonColor={buttonColor}
            onCancelPressed={onCancelPressed}
            onConfirmPressed={onConfirmPressed}
        />
    )
}

export default Alert