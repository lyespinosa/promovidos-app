import axios from "axios";
import { BASE_URL } from '@env'

export const getOwnPromotor = async (token, id) => {
    try {
        const response = await axios.get(`${BASE_URL}promotors/get/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        return response.data;
    }
    catch (e) {
    }
}