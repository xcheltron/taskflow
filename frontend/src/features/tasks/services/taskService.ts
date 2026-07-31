import api from "../../../api/axios";
import type { getTasksData } from "../types";

export const getTasks = async (data: getTasksData) => {
    const response = await api.get(`tasks/find/${data.id}`)
    return response.data
}