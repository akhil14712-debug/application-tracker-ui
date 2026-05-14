import axios from "axios";
import { getToken } from "./AuthAService";



axios.interceptors.request.use((config) =>{
    const token = getToken();
     console.log("Token being sent:", token);
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})