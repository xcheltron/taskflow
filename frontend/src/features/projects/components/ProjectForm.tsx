import Card from "../../../components/ui/Card"
import Button from "../../../components/ui/Button"
import { getUser } from "../../auth/storage"
import { useEffect, useState } from "react"
import { deleteProject, getProjects, newProject } from "../../projects/services/projectService"
import { useNavigate } from "react-router-dom"
import type { project } from "../types"
import ProjectShowModal from "./ProjectShowModal"

function ProjectForm (){

    const navigate = useNavigate()
    const user = getUser()
    const [showModal, setShowModal] = useState(false)
    const [projects, setProjects] = useState <project[]>([])
    const [title, setTitle] = useState ("")
    const [description, setDescription] = useState ("")
    const [color, setColor] = useState <"default" | "red" | "blue" | "yellow" | "gray" | "pink"> ("default")

    const loadProjectsUser = async () =>{
        try {
            const response = await getProjects(user)
            console.log(response)
            setProjects(response.result)
        } catch (error) {
                
        }
    }

    //Cuando cargue la pagina este metodo se dispara para buscar los proyectos guadados
    useEffect(() =>{
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

    const handleShowModal = async () =>{
        setShowModal(true)
    }

    const handleNewProject = async () =>{
        try {
            const response = await newProject({userId: user.id, name: title, description: description, color: color})
            console.log(response)
        } catch (error) {
            console.error(error)
        }
        setColor("default")
        setTitle("")
        setDescription("")
        loadProjectsUser()
        setShowModal(false)
    }

    const handleDeleteProject = async (project: project) =>{
        try {
            const id = project.id_project
            const response = await deleteProject({id:id})
            console.log(response)
        } catch (error) {
            console.error(error)
        }
        loadProjectsUser()
    }

    return(
        <div className="flex flex-col p-6 pl-8">
            <div className="flex justify-between items-center">
                <div className="pb-5"><h1 className="text-2xl font-bold font-mono">Mis proyectos</h1></div>
                <div className="pb-5 pr-6"><Button id="NewButton" type="submit" color="ok" onClick={() => {handleShowModal()}}>New project</Button></div>
            </div>
            <div className="flex flex-wrap gap-4">
                {projects.map((p: project) =>(
                    <Card 
                        key={p.id_project} 
                        onClickCard={() => handleCLick(p)}
                        onClickButton={() => handleDeleteProject(p)} 
                        title={p.name} content={p.description} 
                        butonColor="delete" 
                        textButon="Delete" 
                        colorCard={p.color} 
                        idbuton={String(p.id_project)}>
                    </Card>
                ))}
            </div> 
            {showModal && (
                <ProjectShowModal
                    title={title}
                    description={description}
                    color={color}

                    setTitle={setTitle}
                    setDescription={setDescription}
                    setColor={setColor}

                    onCancel={()=> setShowModal(false)}
                    onSave={handleNewProject}
                />
            )}
        </div>
    )
}

export default ProjectForm