export namespace ITranslate {
  export interface translatePayload {
    userId: string;
    source_lang: string;
    target_lang: string;
    text: string;
  }

  export interface translateResponse {
    status: boolean;
    translation?: string;
    saved?: any;
  }

  export interface translation {
    source_lang: string;
    target_lang: string;
    text: string;
    translation: string;
  }
}