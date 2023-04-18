import { NativeWindStyleSheet } from 'nativewind'
import { StyleSheet } from 'react-native'
import { s } from 'react-native-wind'

const input_color = "bg-[#f9ffff]"; //El color de background para todos los inputs
const input_mt = "mt-5"
const input = "px-2 py-2 pl-4 rounded-lg text-[20px] min-h-3 w-full border border-gray-600 "
const place_holder_color = "bg-black"

const DefaultStyles = {
    borderColor: s`border-blue-500`,
    input: s`${input} ${input_mt}`,
    firstInput: s`${input} `,
    inputMt: s`${input_mt}`,
    inputColor: s`${input_color}`,
    select: s`${input_color, input_mt}`,

    placeHolderColor: s`text-gray-400`
}

export default DefaultStyles

