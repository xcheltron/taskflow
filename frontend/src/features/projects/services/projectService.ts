import api from "../../../api/axios";
import type { countProjectData } from "../types";

export const countProjects = async (data: countProjectData)=> {
    const response = await api.get(`projects/countProjects/${data.id}`)
    return response.data
}

