import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { createTask, getTasks } from "../services/taskService"
import type { task } from "../types"
import TaskList from "./TaskList"
import TaskTitle from "./TaskTitle"
import TaskShowModal from "./TaskShowModal"

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
                <TaskShowModal
                    title={title}
                    description={description}
                    priority={priority}
                    dueDate={dueDate}

                    setTitle={setTitle}
                    setDescription={setDescription}
                    setPriority={setPriority}
                    setDueDate={setDueDate}

                    onCancel={() => setShowModal(false)}
                    onSave={handleNewTask}
                />
            )}
        </div>
    )
}

export default TaskForm