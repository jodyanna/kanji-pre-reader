/**
 * Parse Kanji characters from user text input (from TextareaForm). Remove duplicates.
 * @param {string} text
 * @returns {Array<string>}
 */
export const parseKanjiFromText = text => {
  /** @type {RegExp} */
  const kanjiRegX = /[\u4e00-\u9faf\u3400-\u4dbf]/g

  // use set to remove duplicates
  return [...new Set(text.match(kanjiRegX))]
}
