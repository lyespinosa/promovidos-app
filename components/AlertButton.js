import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import AwesomeAlert from 'react-native-awesome-alerts';

const AlertButton = ({messageText, buttonText}) => {

    const [show, setshow] = useState(false)

    return (
        <View className="bg-white flex-1">
            <TouchableOpacity className="bg-blue-500 m-auto px-10 py-4 rounded-md" onPress={() => {
                setshow(true)
            }}>
                <View className="">
                    <Text className="font-semibold text-[24px] text-white" >{buttonText}</Text>
                </View>
            </TouchableOpacity>

            <AwesomeAlert
                show={show}
                title={messageText}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Aceptar"
                confirmButtonColor="green"
                onCancelPressed={() => { setshow(false) }}
                onConfirmPressed={() => { setshow(false) }}
            />
        </View>
    )
}

export default AlertButton