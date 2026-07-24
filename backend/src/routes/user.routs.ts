//importar los controladores y middlewares
import { registerUser } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.post('/', registerUser)

export default router