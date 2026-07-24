import { projectCreateController } from "../controllers/project.controller.js";

import { Router } from "express";

const router = Router();

router.post('/create', projectCreateController)

export default router;