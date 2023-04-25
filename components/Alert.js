import { View, Text } from 'react-native'
import React from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';

const Alert = ({text, buttonText = "Aceptar", show = false, showProgress=false, onConfirmPressed}) => {
    return (
        <AwesomeAlert
            show={show}
            showProgress={showProgress}
            title={text}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showConfirmButton={button}
            confirmText={buttonText}
            confirmButtonColor="#4176ef"
            onCancelPressed={() => {
                this.hideAlert();
            }}
            onConfirmPressed={onConfirmPressed}
        />
    )
}

export default Alert