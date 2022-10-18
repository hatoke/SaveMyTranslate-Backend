import { Schema, model } from "mongoose";
import { ITranslate } from "../interfaces/translate.interface";

const TranslationSchema = new Schema({
    source_lang: String,
    taget_lang: String,
    text: String,
    translation: String
})

const TranslationDb = model<ITranslate.translation>("translations", TranslationSchema);
export default TranslationDb