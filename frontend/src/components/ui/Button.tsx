export interface ButtonProps {
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
    color?: "primary" | "secondary"
}

function Button({
    children,
    type = "button",
    color = "primary"
}: ButtonProps) {

    const styles = {
        primary: "bg-blue-600 text-white",
        secondary: "bg-gray-200 text-black"
    }

    return (
        <button 
            type={type}
            className={`${styles[color]} box-border border border-transparent rounded-md p-1 text-sm`}
        >
            {children}
        </button>
    )
}

export default Button