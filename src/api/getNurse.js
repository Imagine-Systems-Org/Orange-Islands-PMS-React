import axios from "./axios";

export async function getNurse(nurse_id) {
    const response = await axios.get(`users/${nurse_id}`)
    return response.data
}