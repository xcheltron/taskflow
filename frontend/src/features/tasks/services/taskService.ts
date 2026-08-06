import api from "../../../api/axios";
import type { getTasksData, createTaskData } from "../types";

export const getTasks = async (data: getTasksData) => {
    const response = await api.get(`tasks/find/${data.id}`)
    return response.data
}

export const createTask = async (data:createTaskData)=> {
    const responese = await api.post(`tasks/create`, data)
    return responese.data
}