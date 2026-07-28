export interface LayaoutProps {
    children: React.ReactNode
}

function AuthLayout({children}: LayaoutProps) {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div  className="bg-neutral-50 block p-6 border rounded-md shadow-xl">
                {children}
            </div>
        </div>

    )
}

export default AuthLayout;