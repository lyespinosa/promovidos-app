import axios from "axios";

export const getList = async (list) => {
    try {
        const response = await axios.get(`http://192.168.1.131:8000/api/${list}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data
    } catch (error) {
        return null
    }
}