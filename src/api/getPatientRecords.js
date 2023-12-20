import axios from "./axios";

export async function getPatientRecords(patient_id) {
    const response = await axios.get(`patientrecords/patient/${patient_id}`)
    return response.data
}