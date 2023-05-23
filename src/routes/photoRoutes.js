import { Router } from "express";

import photoController from "../controllers/photoController";

const router = new Router();

router.post('/', photoController.store);

export default router;
