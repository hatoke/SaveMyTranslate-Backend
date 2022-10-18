import axios from "axios";

export namespace TranslateHelpers{
    export async function translation(text: string): Promise<void | any> {
        const {data} = await axios.get(`${process.env.TRANSLATE_URL}${text}`);        
        return data;
    }
}