import { projectCreateController } from "../controllers/project.controller.js";
import { projectSearchController } from "../controllers/project.controller.js";
import { projectUpdateController } from "../controllers/project.controller.js";
import { projectDeleteController } from "../controllers/project.controller.js";

import { Router } from "express";

const router = Router();

router.post('/create', projectCreateController)
router.get('/user/:id', projectSearchController)
router.put('/update/:id', projectUpdateController)
router.delete('/delete/:id', projectDeleteController)

export default router;