function SideBar () {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-6">TASKFLOW</h2>

            <nav className="flex flex-col gap-3">
                <a href="#">🏠 Dashboard</a>
                <a href="#">📁 Projects</a>
                <a href="#">📋 Tasks</a>
                <a href="#">⚙️ Settings</a>
            </nav>
        </aside>
    )
}

export default SideBar