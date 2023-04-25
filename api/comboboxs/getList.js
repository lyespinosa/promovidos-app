import axios from "axios";
import {BASE_URL} from '@env'

export const getList = async (list) => {
    try {
        const response = await axios.get(`http://192.168.100.55:8000/api/${list}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data
    } catch (error) {
        return null
    }
}