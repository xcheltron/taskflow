import { Router } from "express";

import { getTotalTaskController } from "../controllers/dashBoard.controller.js";

const router = Router()

router.get('/getTasks/:id', getTotalTaskController)

export default router