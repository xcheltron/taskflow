import Button from "./Button"

export interface propsCardLayout{
    idbuton: string
    title: string
    content: string
    colorCard : "default" | "red" | "blue" | "yellow" | "gray" | "pink"
    butonColor?: "ok" | "disable" | "delete"
    textButon?: string
    onClickCard?: () => void
    onClickButton?: React.MouseEventHandler<HTMLButtonElement>
}

function Card(props: propsCardLayout) {

    const styles = {
        default: "bg-white-100",
        red: "bg-red-600",
        blue: "bg-blue-700 hover:bg-blue-800",
        yellow: "bg-yellow-600",
        gray: "bg-gray-600",
        pink: "bg-pink-600"

    }

    return (
        <div className={`${styles[props.colorCard]} w-72 h-60 p-6 border rounded-md shadow-xs flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-transform `} onClick={props.onClickCard}>
            <div>
                <h5 className="mb-3 text-2xl font-semibold">
                    {props.title}
                </h5>

                <p className="text-body">
                    {props.content}
                </p>
            </div>
            {props.textButon && props.butonColor &&(            
                <Button id={props.idbuton} type="submit" color={props.butonColor} onClick={props.onClickButton}>
                    {props.textButon}
                </Button>
            )}
        </div>
    );
}

export default Card