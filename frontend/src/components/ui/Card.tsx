import Button from "./Button"

export interface propsCardLayout{
    title: string
    content: string
    colorCard?: "default" | "red" | "blue" | "yellow" | "gray" | "pink"
    idbuton?: string
    butonColor?: "ok" | "disable" | "delete"
    textButon?: string
    onClickCard?: () => void
    onClickButton?: React.MouseEventHandler<HTMLButtonElement>
}

function Card({title,
    content,
    colorCard = "default",
    idbuton,
    butonColor,
    textButon,
    onClickCard,
    onClickButton,
}: propsCardLayout) {

    const styles = {
        default: "bg-white-100",
        red: "bg-red-600",
        blue: "bg-blue-700 hover:bg-blue-800",
        yellow: "bg-yellow-600",
        gray: "bg-gray-600",
        pink: "bg-pink-600"

    }

    return (
        <div className={`${styles[colorCard]} w-72 h-60 p-6 border rounded-md shadow-xs flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-transform `} onClick={onClickCard}>
            <div>
                <h5 className="mb-3 text-2xl font-semibold">
                    {title}
                </h5>

                <p className="text-body">
                    {content}
                </p>
            </div>
            {textButon && butonColor &&(            
                <Button id={idbuton} type="submit" color={butonColor} onClick={onClickButton}>
                    {textButon}
                </Button>
            )}
        </div>
    );
}

export default Card