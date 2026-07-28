export interface InputProps {
    id: string,
    name: string, 
    placeholder: string
    type?: "email" | "password" | "text"
}

function Input({
    placeholder,
    type = "email"
}: InputProps) {

    return (
        <input
            type={type}
            placeholder={placeholder}
            className="bg-neutral-100 border rounded-md text-sm block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            required
        />
    )
}

export default Input