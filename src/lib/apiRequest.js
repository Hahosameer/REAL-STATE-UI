import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://real-state-backend-steel.vercel.app/",
    withCredentials: true
})
export default apiRequest;