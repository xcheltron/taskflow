import { taskCreateController, taskFindProjectController, taskUpdateController } from "../controllers/task.controller.js";

import { Router } from "express";

const router = Router()

router.post("/create", taskCreateController)
router.get("/find/:id", taskFindProjectController)
router.put("update/:id", taskUpdateController)

export default router