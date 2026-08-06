import api from "../../../api/axios";
import type { countTaskData,countProjectData, getProjectsTypes } from "../types";

export const countProjects = async (userid: countProjectData)=> {
    const response = await api.get(`projects/countProjects/${userid.id}`)
    return response.data
}

export const countTasks = async (userid: countTaskData) => {
    const response = await api.get(`dashboard/getTasks/${userid.id}`)
    return response.data
} 

export const getProjects = async (data: getProjectsTypes) => {
    const response = await api.get(`projects/user/${data.id}`)
    return response.data
}