import { taskCreateController } from "../controllers/task.controller.js";

import { Router } from "express";

const router = Router()

router.post("/create", taskCreateController)

export default router