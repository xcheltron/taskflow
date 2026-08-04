import  express from "express";
import cors from "cors"
import userRoutes from "./routes/user.routs.js";
import projectRoutes from "./routes/project.routs.js"
import taskRoutes from "./routes/task.routs.js"
import dashBoard from "./routes/dashBoard.routs.js"

const app = express();

//Middlewares
app.use(cors())
app.use(express.json())

//Ruta de prueba
app.get("/", (req,res) =>{
    res.json({
        message: "TaskFLow API funcionando 🚀"
    })
})

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes)
app.use("/api/tasks", taskRoutes)
app.use("/api/dashboard", dashBoard)

export default app;