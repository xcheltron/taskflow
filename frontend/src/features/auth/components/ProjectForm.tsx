import Card from "../../../components/ui/Card"
import Button from "../../../components/ui/Button"

function ProjectForm (){
    return(
        <div className="flex flex-col p-6 pl-8">
            <div className="flex justify-between items-center">
                <div className="pb-5"><h1 className="text-2xl font-bold font-mono">Mis proyectos</h1></div>
                <div className="pb-5 pr-6"><Button type="submit" color="ok">New project</Button></div>
            </div>
            <div className="flex flex-wrap gap-4">
                <Card title="Proyecto 1" content="Total de tareas 5" butonColor="delete" textButon="Delete"></Card>
                <Card title="Proyecto 1" content="Total de tareas 5" butonColor="delete" textButon="Delete"></Card>
                <Card title="Proyecto 1" content="Total de tareas 5" butonColor="delete" textButon="Delete"></Card>
                <Card title="Proyecto 1" content="Total de tareas 5" butonColor="delete" textButon="Delete"></Card>
                <Card title="Proyecto 1" content="Total de tareas 5" butonColor="delete" textButon="Delete"></Card>
            </div> 
        </div>
    )
}

export default ProjectForm