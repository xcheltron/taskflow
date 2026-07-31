import { useEffect, useState } from "react"
import Button from "../../../components/ui/Button"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getTasks } from "../../tasks/services/taskService"

function TaskForm() {

    //Creamos una interfaz para las tareas
    interface task{
        id: number
        title: string
        description: string | null
        status: "COMPLETED" | "PENDING"
        priority: "LOW" | "MEDIUM" | "HIGH"
        duedate: string
    }

    const priorityColor = {
        LOW: "bg-green-500",
        MEDIUM: "bg-amber-400",
        HIGH: "bg-red-500",
    }
    //creamos los estados
    const [tasks, setTasks] = useState <task[]>([])

    //Importar cosas de la otra pagina
    const location = useLocation()
    const projectProps = location.state
    const {id} = useParams()

    console.log(projectProps)
    console.log(id)

    useEffect (() =>{
        const loadTasks = async ()=>{
            try {
                const response = await getTasks({id: Number(id)})
                console.log(response)
                setTasks(response)
            } catch (error) {
                console.error(error)
            }
        }
        loadTasks()
    },[])

    return (
        <div className="flex flex-col p-6 pl-8">
            <div className="flex justify-between items-center">
                <div className="pb-5">
                    <h1 className="text-2xl font-bold font-mono">
                        {projectProps.name}
                    </h1>
                </div>

                <div className="pb-5 pr-6">
                    <Button id="newTask">New Task</Button>
                </div>
            </div>

            <div className="pb-10">
                <h2 className="text-md font-semibold">
                    {projectProps.description}
                </h2>
            </div>

            {/* Lista de tareas */}
            {tasks.map((t: task) =>(
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between border-b py-4">
                        <div className="flex items-center gap-4">
                            <input type="checkbox" className="mt-1 size-6" />
                            <div>
                                <label className="text-xl">
                                    {t.title}
                                </label>
                                {t.description && (
                                    <p className="mt-1 text-sm text-gray-500">
                                        {t.description}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className={`size-4 rounded-full ${priorityColor[t.priority]}`} />

                            <Button id="basura" color="transparent" fullWidth={false}>
                                🗑
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskForm