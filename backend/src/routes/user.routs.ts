//importar los controladores y middlewares
import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.post('/', registerUser)
router.post('/login', loginUser)

export default router