import TranslationDb from "../models/translation.schema";
import { ITranslate } from "../interfaces/translate.interface";
import { TranslateHelpers } from "../helpers/translate.helpers";
export class TranslateService {
  async saveTranslate(translation: ITranslate.translation): Promise<any> {
    try {
      TranslationDb.updateOne(
        {
          text: translation.text,
        },
        {
          source_lang: translation.source_lang,
          target_lang: translation.target_lang,
          text: translation.text,
          translation: JSON.stringify(translation.translation),
        },
        { upsert: true },
        (err) => {
          if (err) {
            return {
              status: false,
            };
          }
        }
      );
    } catch (error) {
      return {
        status: false,
      };
    }
  }

  async translation(body: ITranslate.translatePayload): Promise<ITranslate.translateResponse> {
    try {
      const translation = await TranslateHelpers.translation(body.text);
      const savedParam: ITranslate.translation = {
        source_lang: body.source_lang,
        target_lang: body.target_lang,
        text: body.text,
        translation: translation,
      };
      const saved = this.saveTranslate(savedParam);
      return {
        status: true,
        translation,
        saved,
      };
    } catch (error) {
      return {
        status: false,
      };
    }
  }
}
