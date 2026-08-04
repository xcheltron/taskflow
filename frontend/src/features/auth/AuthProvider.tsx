import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getUser } from "./storage";
import type { User } from "./types";

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(getUser())

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}