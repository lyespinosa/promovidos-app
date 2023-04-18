import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import DefaultStyles from '../styles/DefaultStyles';

function DropDown({ placeholder, items, onChange, value }) {

    const [isFocus, setIsFocus] = useState(false)

    return (
        <Dropdown
            style={[DefaultStyles.input, isFocus && DefaultStyles.borderColor]}
            data={items} //los items que se mostrarán
            search
            maxHeight={200}
            labelField="label"
            valueField="value"
            value={value} //el dato que se selecciona
            placeholder={placeholder}
            placeholderStyle={DefaultStyles.placeHolderColor}
            searchPlaceholder="Search..."
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={onChange}
        />
    )
}

export default DropDown