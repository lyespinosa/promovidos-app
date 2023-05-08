import axios from "axios";
import {BASE_URL} from '@env'

export const getList = async (list, token) => {
    try {
        const response = await axios.get(`${BASE_URL}${list}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token,
            },
        })
        return response.data
    } catch (error) {
        return null
    }
}