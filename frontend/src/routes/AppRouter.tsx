import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks"

function AppRouter () {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/tasks/:id" element={<Tasks/>}/>
        </Routes>
    )
}

export default AppRouter;