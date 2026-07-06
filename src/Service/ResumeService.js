import axios from "axios";

const RESUME_API_URL = "http://localhost:8080/api/resume"

export const uploadResume = (file,userId) => {
    const formData = new FormData()
    formData.append("file",file)
    formData.append("userId",userId)

    return axios.post(`${RESUME_API_URL}/upload`,formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
})
}
export const getResumesByUser = (userId) => {
    return axios.get(`${RESUME_API_URL}/user/${userId}`)
}

export const deleteResume = (resumeId) => {
    return axios.delete(`${RESUME_API_URL}/${resumeId}`)
}