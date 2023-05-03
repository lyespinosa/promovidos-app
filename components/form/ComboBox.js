import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import DefaultStyles from '../../styles/DefaultStyles';

function ComboBox({ placeholder, items, onChange, value, showSearch = true, onBlur, onFocus }) {

    const [isFocus, setIsFocus] = useState(false)

    return (
        <Dropdown
            className="border border-gray-600 focus:border-green-600"
            style={[DefaultStyles.input]}
            data={items} //los items que se mostrarán
            search={showSearch}
            maxHeight={200}
            labelField="label"
            valueField="value"
            value={value} //el dato que se selecciona
            placeholder={placeholder}
            placeholderStyle={DefaultStyles.placeHolderColor}
            searchPlaceholder="Search..."
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
        />
    )
}

export default ComboBox