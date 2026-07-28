export interface LayaoutProps {
    children: React.ReactNode
}

function AuthLayout({children}: LayaoutProps) {
    return (
        <div className="bg-neutral-50 block p-6 border rounded-md shadow-xl">
            {children}
        </div>
    )
}

export default AuthLayout;