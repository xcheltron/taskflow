import Button from "../../../components/ui/Button"

function TaskForm() {
    return (
        <div className="flex flex-col p-6 pl-8">
            <div className="flex justify-between items-center">
                <div className="pb-5">
                    <h1 className="text-2xl font-bold font-mono">
                        Nombre del proyecto
                    </h1>
                </div>

                <div className="pb-5 pr-6">
                    <Button>New Task</Button>
                </div>
            </div>

            <div className="pb-10">
                <h2 className="text-md font-semibold">
                    Description
                </h2>
            </div>

            {/* Lista de tareas */}
            <div className="flex flex-col gap-2">

                <div className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="size-6" />

                        <label className="text-xl">
                            Hacer ejercicio
                        </label>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="size-4 rounded-full bg-amber-400" />

                        <Button color="transparent" fullWidth={false}>
                            🗑
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="size-6" />

                        <label className="text-xl">
                            Leer libro
                        </label>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="size-4 rounded-full bg-red-600" />

                        <Button color="transparent" fullWidth={false}>
                            🗑
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TaskForm