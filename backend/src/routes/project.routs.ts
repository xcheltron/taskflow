import { projectCreateController } from "../controllers/project.controller.js";
import { projectSearchController } from "../controllers/project.controller.js";

import { Router } from "express";

const router = Router();

router.post('/create', projectCreateController)
router.get('/user/:id', projectSearchController)


export default router;