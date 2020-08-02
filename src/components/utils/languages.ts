import { has, get } from "lodash"

export enum SUPPORTED_LANGUAGES {
  en = "en", // English
  es = "es", // Español - Spanish
  jp = "jp", // 日本人 - Japanese
  kr = "kr", // 한국어 - Korean
  pt = "pt", // Português - Portuguese
  ru = "ru", // русский - Russian
  zh = "zh", // 中文 - Chinese
}

export const chooseTranslation = (
  translation: { [Key in SUPPORTED_LANGUAGES]?: React.ReactNode | string },
  language: SUPPORTED_LANGUAGES,
  path: string,
  defaultLanguage = "en"
): React.ReactNode | string =>
  has(translation, `${language}.${path}`)
    ? get(translation, `${language}.${path}`)
    : get(translation, `${defaultLanguage}.${path}`)

// For Copy Paste Purposes:
// export default {
//   [SUPPORTED_LANGUAGES.en]: {

//   },
//   [SUPPORTED_LANGUAGES.es]: {

//   },
//   [SUPPORTED_LANGUAGES.jp]: {

//   },
//   [SUPPORTED_LANGUAGES.kr]: {

//   },
//   [SUPPORTED_LANGUAGES.pt]: {

//   },
//   [SUPPORTED_LANGUAGES.ru]: {

//   },
//   [SUPPORTED_LANGUAGES.zh]: {

//   }
// }
