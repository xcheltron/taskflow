import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { createTask, getTasks } from "../services/taskService"
import type { task } from "../types"
import TaskList from "./TaskList"
import TaskTitle from "./TaskTitle"
import Button from "../../../components/ui/Button"

function TaskForm() {

    //creamos los estados
    const [tasks, setTasks] = useState <task[]>([])
    const [showModal, setShowModal] = useState(false)
    const [priority, setPriority] = useState<"LOW" | "MEDIUM" | "HIGH">("MEDIUM")
    const [dueDate, setDueDate] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    //Importar cosas de la otra pagina
    const location = useLocation()
    const projectProps = location.state
    const {id} = useParams()

    const loadTasks = async ()=>{
            try {
                const response = await getTasks({id: Number(id)})
                console.log(response)
                setTasks(response)
            } catch (error) {
                console.error(error)
            }
        }

    useEffect (() =>{
        loadTasks()
    },[])

    const handleClick = () =>{
        setShowModal(true)
    } 

    const handleNewTask = async () =>{
        try {
            const response = await createTask( 
                {title, description, status:"PENDING", priority, duedate:new Date(dueDate), projectId:Number(id)}
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        setTitle("")
        setDescription("")
        setPriority("MEDIUM")
        loadTasks()
        setShowModal(false)
    }

    return (
        <div className="flex flex-col p-6 pl-8">
            <TaskTitle name={projectProps.name} description={projectProps.description} onClick={() => {handleClick()}}/>
            {/* Lista de tareas */}
            {tasks.map((t: task) =>(
                <TaskList title={t.title} description={t.description} priority={t.priority}></TaskList>
            ))}

            {showModal && (
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
                                id="CancelTask" type="button" color="delete" fullWidth={false} onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                id="newTask" type="submit" color="ok" fullWidth={false} onClick={()=> {handleNewTask()}}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TaskForm