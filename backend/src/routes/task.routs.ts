import { taskCreateController, taskFindProjectController } from "../controllers/task.controller.js";

import { Router } from "express";

const router = Router()

router.post("/create", taskCreateController)
router.get("/find/:id", taskFindProjectController)

export default router