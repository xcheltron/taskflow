export interface countProjectData{
    id: number
}

export interface countTaskData{
    id: number
}

export interface getProjectsTypes {
    id: number
}

export interface project{
    id_project: number
    name: string
    description: string
    color: "default" | "red" | "blue" | "yellow" | "gray" | "pink"
}

export interface newProjectData{
    userId: number
    name: string
    color: "default" | "red" | "blue" | "yellow" | "gray" | "pink"
    description?: string 
}