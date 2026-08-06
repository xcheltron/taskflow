import Button from "../../../components/ui/Button";

export interface taskTitleProps {
    name: string,
    description?: string | null
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function TaskTitle ({
    name,
    description,
    onClick
}: taskTitleProps){
    return (
        <div>
        <div className="flex justify-between items-center">
            <div className="pb-5">
                <h1 className="text-2xl font-bold font-mono">
                    {name}
                </h1>
            </div>

            <div className="pb-5 pr-6">
                <Button id="newTask" onClick={onClick}>New Task</Button>
            </div>
        </div>

        <div className="pb-10">
            <h2 className="text-md font-semibold">
                {description}
            </h2>
        </div>
        </div>
    )
}

export default TaskTitle