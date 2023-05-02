import { NativeWindStyleSheet } from 'nativewind'
import { StyleSheet } from 'react-native'
import { s } from 'react-native-wind'

const input_color = "bg-[#f9ffff]"; //El color de background para todos los inputs
const input_mt = "mt-6"
const input = "px-2 py-2 pl-4 rounded-lg text-[20px] min-h-3 min-w-full bg-white"
const place_holder_color = "bg-black"
const viewInput = "";

const DefaultStyles = {
    greenColor: '#059669',
    input: s`${input}`,
    firstViewInput: s`${viewInput} `,
    viewInput: s`${input_mt} ${viewInput}`,
    viewInputLogin: s`mt-12`,
    inputMt: s`${input_mt}`,
    inputColor: s`${input_color}`,
    select: s`${input} ${input_mt}`,
    placeHolderColor: s`text-gray-400`,
    inputText: s`absolute text-xs -bottom-2/6 left-3 text-red-400`,
    inputTextButton: s`absolute text-xs -bottom-2/6 left-3 text-red-500 text-base`,
    inputTextLogin: s`absolute text-xs -bottom-3/5 text-red-500 bg-whote rounded-sm py-1 px-2 w-full `,
    inputTextColor: s`text-red-800`,
    focusBorderColor: s`border-blue-500`,
    blurBorderColor: s`border-gray-600`,
    errorBorderColor: s`border-red-400`,
    swithBorder:s`w-36`,
    submitInput:s`${input_mt}`,
    disable:s`bg-emerald-900`,
    infoAccount: s`capitalize text-base mt-2 font-semibold`,
    infoAccountText: s`capitalize text-base mt-2 font-normal`

}

export default DefaultStyles

