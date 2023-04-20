import axios from "axios";
import {BASE_URL} from '@env'

export const getList = async (list) => {
    try {
        const response = await axios.get(`${BASE_URL}${list}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data
    } catch (error) {
        return null
    }
}