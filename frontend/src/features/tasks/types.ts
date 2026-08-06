export interface getTasksData{
    id:number
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