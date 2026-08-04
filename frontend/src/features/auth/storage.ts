import type { User } from "./types"

export const saveUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user))
}
export const getUser = () => {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
}

export const removeUser = () => {
    localStorage.removeItem("user")
}