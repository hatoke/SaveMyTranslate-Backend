import { Router } from "express";
import translate from './routes/translate';

const router = Router();

router.use("/translate", translate);

export default router;