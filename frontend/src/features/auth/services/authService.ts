import api from "../../../api/axios";
import type { LoginData, RegistrarData } from "../types";

export const register = async (data: RegistrarData) => {
    const responese = await api.post("users/", data)

    return responese.data
}

export const login = async (data: LoginData) => {

    console.log("Enviando ", data)

    const responese = await api.post("users/login", data)

    return responese.data
}