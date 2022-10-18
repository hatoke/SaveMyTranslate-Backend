import {Router} from 'express';
import { TranslateController } from '../../controllers/translate.controller';

const translateController: TranslateController = new TranslateController();

const router = Router();

router.post("/translation", translateController.getTranslation);

export default router;