import Button from "../../../components/ui/Button";

export interface showModalProps{
    title: string
    description: string
    color: "default" | "red" | "blue" | "yellow" | "gray" | "pink"

    setTitle: (value: string) => void
    setDescription: (value: string) => void
    setColor: (value: "default" | "red" | "blue" | "yellow" | "gray" | "pink") => void
    
    onSave: () => void
    onCancel: () => void
}

function showModal ({
    title,
    description,
    color,
    setTitle,
    setDescription,
    setColor,
    onSave,
    onCancel
}: showModalProps) {
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-500px rounded-lg bg-white p-6 shadow-lg">
                <h2>
                    New Project
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
                    placeholder="Description..."
                    className="mb-4 w-full rounded border p-2"
                    onChange={(e) => {setDescription(e.target.value)}}
                />

                <div className="mb-4">
                    <label className="mb-1 block font-medium">
                        Color
                    </label>
                    <select
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value as "default" | "red" | "blue" | "yellow" | "gray" | "pink")
                        }} 
                        className="w-full border rounded p-2"
                    >
                        <option value="default">White</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="gray">Gray</option>
                        <option value="pink">Pink</option>
                    </select>
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