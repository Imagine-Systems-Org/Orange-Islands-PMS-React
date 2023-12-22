import axios from "./axios";

export async function getAllNurses() {
    const response = await axios.get(`users/nurses`)
    return response.data
}