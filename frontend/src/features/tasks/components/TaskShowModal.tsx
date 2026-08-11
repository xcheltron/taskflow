import Button from "../../../components/ui/Button"

export interface showModalProps{
    title: string
    description: string
    priority: "LOW" | "MEDIUM" | "HIGH"
    dueDate: string

    setTitle: (value: string) => void
    setDescription: (value: string) => void
    setPriority: (value: "LOW" | "MEDIUM" | "HIGH") => void
    setDueDate: (value: string) => void

    onCancel: () => void
    onSave: ()=> void
}

function showModal ({
    title,
    description,
    priority,
    dueDate,
    setTitle,
    setDescription,
    setPriority,
    setDueDate,
    onCancel,
    onSave
}: showModalProps){
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-500px rounded-lg bg-white p-6 shadow-lg">

                        <h2 className="mb-4 text-2xl font-bold">
                            New Task
                        </h2>

                        <input
                            value={title}
                            type="text"
                            placeholder="Title"
                            className="mb-4 w-full rounded border p-2"
                            onChange={(e) => {setTitle(e.target.value)}}
                        />

                        <textarea
                            value={description}
                            placeholder="Description"
                            className="mb-4 w-full rounded border p-2"
                            onChange={(e) => {setDescription(e.target.value)}}
                        />

                        <div className="mb-4">
                            <label className="mb-1 block font-medium">
                                Priority
                            </label>

                            <select
                                value={priority}
                                onChange={(e) =>
                                    setPriority(e.target.value as "LOW" | "MEDIUM" | "HIGH")
                                }
                                className="w-full rounded border p-2"
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block font-medium">
                                Due Date
                            </label>

                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="w-full rounded border p-2"
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <Button
                                id="CancelTask" type="button" color="delete" fullWidth={false} onClick={onCancel}
                            >
                                Cancel
                            </Button>

                            <Button
                                id="newTask" type="submit" color="ok" fullWidth={false} onClick={onSave}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
    )
}

export default showModal