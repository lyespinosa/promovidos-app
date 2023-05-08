import axios from "axios";
import { BASE_URL } from '@env'

export const login = async (values) => {
    try {
        const response = await axios.post(`${BASE_URL}login`, {
            headers: {
                'Content-Type': 'application/json',
            },
            values
        },
            );
        return response.data
    } catch (error) {
        return null
    }
}