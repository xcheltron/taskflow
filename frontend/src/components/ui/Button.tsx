export interface ButtonProps {
    children: React.ReactNode
    id: string
    type?: "button" | "submit" | "reset"
    color?: "ok" | "disable" | "delete" | "transparent"
    fullWidth?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({
    children,
    type = "button",
    color = "ok",
    fullWidth = true,
    onClick
}: ButtonProps) {

    const styles = {
        ok: "bg-blue-600 text-white hover:bg-blue-800",
        disable: "bg-gray-200 text-black hover:bg-gray-400",
        delete: "bg-red-600 text-white hover:bg-red-800",
        transparent: "bg-transparen" 
    }

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`
                ${styles[color]}
                ${fullWidth ? "w-full" : "w-auto"} 
                box-border 
                border 
                border-transparent 
                rounded-md 
                px-4
                py-2 
                text-md
                transition-all
                duration-200 
                hover:cursor-pointer 
                hover:scale-105`}
        >
            {children}
        </button>
    )
}

export default Button