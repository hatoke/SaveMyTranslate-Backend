import {Request, Response} from 'express';
import { TranslateService } from './../services/translate.service';
import {ITranslate} from './../interfaces/translate.interface';

export class TranslateController{    
    private translateService: TranslateService = new TranslateService();  

    constructor(){
        this.getTranslation = this.getTranslation.bind(this)
    }

    async getTranslation(req: Request, res: Response){    
        const data = await this.translateService.translation(req.body as ITranslate.translatePayload);
        res.send(data);
    }
}