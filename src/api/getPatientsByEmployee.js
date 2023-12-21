import axios from "./axios";

export async function getPatientsByDoctor(doctor_id) {
    if (doctor_id === undefined) {
        return;
    } else {
        const response = await axios.get(`patients/assignedDoctor/${doctor_id}`)
        return response.data
    }
}

export async function getPatientsByNurse(nurse_id) {
    if (nurse_id === undefined) {
        return;
    } else {
        const response = await axios.get(`patients/assignedDoctor/${nurse_id}`)
        return response.data
    }
}
