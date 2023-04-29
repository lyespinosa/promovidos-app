import axios from "axios";
import {BASE_URL} from '@env'

export const getUser = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}user`, {
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