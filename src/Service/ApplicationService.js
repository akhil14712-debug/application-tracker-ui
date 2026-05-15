import axios from "axios";
import App from "../App";

const REST_API = `${import.meta.env.VITE_API_URL}/api/appli`;


export const listApplication = () => axios.get(REST_API);

export const createApplication = (application) => axios.post(REST_API,application)

export const getAppliById = (id) => axios.get(REST_API+"/"+id)

export const updateAppli = (id,application) => axios.put(REST_API+'/'+id,application)

export const deleteAppli = (id) => axios.delete(REST_API+"/"+id)

export const completeList = (name,pageNo,pageSize,sortBy,sortDir) =>{
    return axios.get(`${import.meta.env.VITE_API_URL}/api/appli/search`,{
        params:{
            name,
            pageNo,
            pageSize,
            sortBy,
            sortDir
        }
    });
};

export const listCounts = () => axios.get(`${import.meta.env.VITE_API_URL}/api/appli/count`);