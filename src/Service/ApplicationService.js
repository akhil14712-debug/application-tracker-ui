import axios from "axios";
import App from "../App";

const REST_API = "http://localhost:8080/api/appli";

export const listApplication = () => axios.get(REST_API);

export const createApplication = (application) => axios.post(REST_API,application)

export const getAppliById = (id) => axios.get(REST_API+"/"+id)

export const updateAppli = (id,application) => axios.put(REST_API+'/'+id,application)

export const deleteAppli = (id) => axios.delete(REST_API+"/"+id)
