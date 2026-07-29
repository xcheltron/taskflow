import SideBar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"

export interface HomePropLayout{
    children: React.ReactNode
}

function MainLayout({children}: HomePropLayout){
    return(
        <div className="flex h-screen">
            <SideBar/>

            <div className="flex flex-col flex-1">
                <Header/>

                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout