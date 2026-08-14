import api from "../../../api/axios";
import type { countTaskData,countProjectData, getProjectsTypes, newProjectData } from "../types";

export const countProjects = async (userid: countProjectData)=> {
    const response = await api.get(`dashboard/countProjects/${userid.id}`)
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

export const newProject = async (data: newProjectData) => {
    const response = await api.post(`projects/create`, data)
    return response.data
}