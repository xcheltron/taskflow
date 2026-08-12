import Button from "../../../components/ui/Button"

export interface taskListProps {
    title: string
    priority: "LOW" | "MEDIUM" | "HIGH"
    description?: string | null
    onDelete: () => void
}

function TaskList ({
    title,
    description,
    priority,
    onDelete
}:taskListProps) {
    
    const priorityColor = {
        LOW: "bg-green-500",    
        MEDIUM: "bg-amber-400",
        HIGH: "bg-red-500",
    }
    return(
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border-b py-4">
                <div className="flex items-center gap-4">
                    <input type="checkbox" className="mt-1 size-6" />
                        <div>
                            <label className="text-xl">
                                {title}
                            </label>
                                {description && (
                            <p className="mt-1 text-sm text-gray-500">
                                {description}
                            </p>
                                )}
                        </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className={`size-4 rounded-full ${priorityColor[priority]}`} />

                        <Button id="basura" color="transparent" fullWidth={false} onClick={onDelete}>
                            🗑
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default TaskList