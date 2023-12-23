import axios from "./axios";

export async function getPatientsByDoctor(doctor_id) {
        const response = await axios.get(`patients/assignedDoctor/${doctor_id}`)
        return response.data
}

export async function getPatientsByNurse(nurse_id) {
        const response = await axios.get(`patients/assignedNurse/${nurse_id}`)
        return response.data
}
