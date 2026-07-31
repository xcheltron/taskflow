import api from "../../../api/axios";
import type { countProjectData, getProjectsTypes } from "../types";

export const countProjects = async (data: countProjectData)=> {
    const response = await api.get(`projects/countProjects/${data.id}`)
    return response.data
}

export const getProjects = async (data: getProjectsTypes) => {
    const response = await api.get(`projects/user/${data.id}`)
    return response.data
}