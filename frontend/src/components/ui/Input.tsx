import type { ChangeEvent } from "react"

export interface InputProps {
    id: string,
    name: string, 
    placeholder?: string
    type?: "email" | "password" | "text" | "checkbox"
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void 
}

function Input({
    id,
    name,
    placeholder,
    type = "email",
    value,
    onChange
}: InputProps) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="bg-neutral-100 border rounded-md text-sm block w-full px-3 py-2.5 shadow-xs placeholder:text-body pb-1"
            required
        />
    )
}

export default Input