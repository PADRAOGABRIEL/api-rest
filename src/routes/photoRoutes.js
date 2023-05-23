import { Router } from "express";
import multer from "multer";
import photoController from "../controllers/photoController";

import multerconfig from '../config/multer';
const upload = multer(multerconfig);

const router = new Router();

router.post('/', upload.single('photo'), photoController.store);

export default router;
