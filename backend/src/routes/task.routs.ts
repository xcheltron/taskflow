import { taskCreateController, taskDeleteController, taskFindProjectController, taskUpdateController } from "../controllers/task.controller.js";

import { Router } from "express";

const router = Router()

router.post("/create", taskCreateController)
router.get("/find/:id", taskFindProjectController)
router.put("/update/:id", taskUpdateController)
router.delete("/delete/:id", taskDeleteController)

export default router