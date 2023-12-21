import axios from "./axios";

export async function getUser(employeeID) {
    const response = await axios.get(`users/employees/${employeeID}`)
    return response.data
}