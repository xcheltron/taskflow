export interface getTasksData{
    id:number
}

export interface deleteTasksData{
    id:number
}

export interface updateTaskData{
    title?: string,
    description?: string,
    status?: "COMPLETED" | "PENDING",
    priority?: "LOW" | "MEDIUM" | "HIGH",
    duedate?: Date,
    completedAt?: Date | null
}

export interface task{
    id: number
    title: string
    description: string | null
    status: "COMPLETED" | "PENDING"
    priority: "LOW" | "MEDIUM" | "HIGH"
    duedate: string
}

export interface createTaskData{
    title: string
    description: string | null
    status: "PENDING"
    priority: "LOW" | "MEDIUM" | "HIGH"
    duedate: Date
    projectId: number
}