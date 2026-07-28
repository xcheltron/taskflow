export interface LayaoutProps {
    children: React.ReactNode
}

function AuthLayout({children}: LayaoutProps) {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div>
                <h1 className="pb-6 text-center text-4xl text-amber-50 font-black">TASKFLOW</h1>
            <div  className="bg-neutral-50 block p-6 border rounded-md shadow-xl">
                {children}
            </div>
            </div>
        </div>

    )
}

export default AuthLayout;