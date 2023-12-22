import axios from "axios";

export default axios.create({
    baseURL: 'https://orangeislandspms-a158a98cb4db.herokuapp.com/',
    timeout: 3000
});