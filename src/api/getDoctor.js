import axios from "./axios";

export async function getDoctor(doctor_id) {
    const response = await axios.get(`users/${doctor_id}`)
    return response.data
}