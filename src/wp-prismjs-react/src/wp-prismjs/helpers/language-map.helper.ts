import { StringMap } from '../shared/string-map.model';

/**
 * Language class prefix.
 */
const LANG_PREFIX = 'language';

/**
 * Map of langauges.
 */
const languageMap: StringMap<string> = {
  vb: 'vb',
  php: 'php',
  java: 'java',
  json: 'json',
  javascript: 'javascript',
  bash: 'bash',
  typescript: 'typescript',
  sql: 'sql',
  xml: 'xml'
};

/**
 * Converts old pre tag attribute to a PrismJS friendly tag
 *
 * @param {string} lang Value from old lang attr.
 * @returns {string} PrismJS friendly language class name.
 */
export function languageMapHelper(lang: string = ''): string {
  try {
    const _lang = lang.toLowerCase();
    const language = !!languageMap[_lang] === true ? languageMap[_lang] : 'markdown';
    return `${LANG_PREFIX}-${language}`;
  } catch (exception) {
    return `${LANG_PREFIX}-markdown`;
  }
}
