import Card from "../../../components/ui/Card"
import Button from "../../../components/ui/Button"
import { getUser } from "../../../utils/storage"
import { useEffect, useState } from "react"
import { getProjects } from "../../projects/services/projectService"
import { useNavigate } from "react-router-dom"

function ProjectForm (){

    interface project{
        id_project: number
        name: string
        description: string
        color: "default" | "red" | "blue" | "yellow" | "gray" | "pink"
    }

    const navigate = useNavigate()
    const user = getUser()
    const [projects, setProjects] = useState <project[]>([])

    //Cuando cargue la pagina este metodo se dispara para buscar los proyectos guadados
    useEffect(() =>{
        const loadProjectsUser = async () =>{
            try {
                const response = await getProjects(user)
                console.log(response)
                setProjects(response.result)
            } catch (error) {
                
            }
        }
    loadProjectsUser()
    },[])
    //Metodo para cuando clickes en una carta te lleve a /tareas y te muestre las tareas del proyecto
    const handleCLick = async (project: project) =>{
        navigate(`/tasks/${project.id_project}`,{
            state: {
                name: project.name,
                description: project.description
            }
        })
    }

    return(
        <div className="flex flex-col p-6 pl-8">
            <div className="flex justify-between items-center">
                <div className="pb-5"><h1 className="text-2xl font-bold font-mono">Mis proyectos</h1></div>
                <div className="pb-5 pr-6"><Button id="NewButton" type="submit" color="ok">New project</Button></div>
            </div>
            <div className="flex flex-wrap gap-4">
                {projects.map((p: project) =>(
                    <Card key={p.id_project} onClickCard={() => handleCLick(p)} title={p.name} content={p.description} butonColor="delete" textButon="Delete" colorCard={p.color} idbuton={String(p.id_project)}></Card>
                ))}
            </div> 
        </div>
    )
}

export default ProjectForm