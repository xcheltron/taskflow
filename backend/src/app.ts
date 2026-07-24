import  express from "express";
import cors from "cors"
import userRoutes from "./routes/user.routs.js";

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

export default app;