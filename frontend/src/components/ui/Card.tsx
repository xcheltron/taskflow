import Button from "./Button"

export interface propsCardLayout{
    title: string
    content: string
    butonColor?: "ok" | "disable" | "delete"
    textButon?: string
}

function Card(props: propsCardLayout) {
    return (
        <div className="w-72 h-60 p-6 border rounded-md shadow-xs flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-transform">
            <div>
                <h5 className="mb-3 text-2xl font-semibold">
                    {props.title}
                </h5>

                <p className="text-body">
                    {props.content}
                </p>
            </div>
            {props.textButon && props.butonColor &&(            
                <Button type="submit" color={props.butonColor}>
                    {props.textButon}
                </Button>
            )}
        </div>
    );
}

export default Card