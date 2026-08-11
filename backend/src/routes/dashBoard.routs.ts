import { Router } from "express";

import { getTotalTaskController, projectCountController } from "../controllers/dashBoard.controller.js";

const router = Router()

router.get('/countProjects/:id', projectCountController)
router.get('/getTasks/:id', getTotalTaskController)

export default router