import { useEffect, useState } from "react"
import Card from "../../../components/ui/Card"

import { getUser } from "../../../utils/storage"
import { countProjects } from "../../projects/services/projectService"

function HomeForm(){

    const user = getUser()
    const [totalProjects, setTotalProjects] = useState(0)

    useEffect(() =>{
        console.log("hola")
        const loadProjects = async () => {
            try {
                const response = await countProjects(user)
                console.log(response)
                setTotalProjects(response.result[0]._count.projects)
            } catch (error) {
                console.error(error)
            }
        }

        loadProjects()
        
    }, [])

    return (
        <div className="flex-3 flex-col items-center pt-8 px-8">
            <h1 className="text-5xl font-bold">HOLA BIENVENIDO {user.name}</h1>
            <h3 className="text-2xl mt-3">Hoy tienes un total x tareas pendientes</h3>
            <div className="flex gap-6 mt-8 flex-wrap justify-center">
                <Card title="Projects" content={String(totalProjects)} />
                <Card title="Pending Tasks" content="12"/>
                <Card title="Completed Today" content="5"/>
            </div>
            <h4 className="text-xl mt-8 mb-3">Today Task's</h4>
            <hr className=""/>
            <div className="flex-col gap-4 my-6">
                    <div className="flex items-center pb-3">
                        <input id="checkbox-remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>
                        <label className="ms-2 text-sm font-medium text-heading">Remember me</label>
                    </div>
                    <div className="flex items-center pb-3">
                        <input id="checkbox-remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>
                        <label className="ms-2 text-sm font-medium text-heading">Remember me</label>
                    </div>
                    <div className="flex items-center pb-3">
                        <input id="checkbox-remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>
                        <label className="ms-2 text-sm font-medium text-heading">Remember me</label>
                    </div>
            </div>
        </div>
    )
}

export default HomeForm