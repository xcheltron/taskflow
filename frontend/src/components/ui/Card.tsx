import Button from "./Button"

export interface propsCardLayout{
    title: string
    content: string
}

function Card(props: propsCardLayout) {
    return (
        <div className="w-72 h-60 p-6 border rounded-md shadow-xs flex flex-col justify-between">
            <div>
                <h5 className="mb-3 text-2xl font-semibold">
                    {props.title}
                </h5>

                <p className="text-body">
                    {props.content}
                </p>
            </div>

            <Button type="submit" color="primary">
                See Project
            </Button>
        </div>
    );
}

export default Card