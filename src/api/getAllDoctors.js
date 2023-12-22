import axios from "./axios";

export async function getAllDoctors() {
    const response = await axios.get(`users/doctors`)
    return response.data
}