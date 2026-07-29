export interface ButtonProps {
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
    color?: "ok" | "disable" | "delete"
}

function Button({
    children,
    type = "button",
    color = "ok"
}: ButtonProps) {

    const styles = {
        ok: "bg-blue-600 text-white",
        disable: "bg-gray-200 text-black",
        delete: "bg-red-600 text-white"
    }

    return (
        <button 
            type={type}
            className={`${styles[color]} box-border border border-transparent rounded-md p-1 text-md w-full hover:cursor-pointer hover:scale-110 transition-transform`}
        >
            {children}
        </button>
    )
}

export default Button