
/**
 * Kanji JSON object retrieved from kanjiapi.
 * @typedef {Object} KanjiData
 * @property {string} kanji - String character of kanji.
 * @property {number} grade - Japanese grade level.
 * @property {number} stroke_count - Number of strokes to write Kanji.
 * @property {Array<string>} meanings - Single word English translations of Kanji.
 * @property {Array<string>} kun_readings - Kun-yomi as Hiragana characters.
 * @property {Array<string>} on_readings - On-yomi as Katakana characters.
 * @property {Array<string>} name_readings - On-yomi as Katakana characters.
 * @property {number} jlpt - JLPT grade levels 1-5 or null.
 * @property {string} unicode - Hex value for unicode.
 * @property {string} heisig_en - Different English translation?
 */

/**
 * Make a fetch request to kanjiapi.dev for each Kanji char parsed from TextareaForm component.
 * @async
 * @function fetchAllKanjiData
 * @param {Array<string>} kanji - An Array of valid single char strings of Kanji used for API call.
 * @returns {Array<Promise<KanjiData>>} allKanjiData - An Array holding API response JSON objects.
 */
export const fetchAllKanjiData = async kanji => {
  /** @type {Array<Promise<KanjiData>>} */
  const allKanjiData = [];

  for (let i = 0; i < kanji.length; i++) {
    /** @type {Response} */
    const response = await fetch("https://kanjiapi.dev/v1/kanji/" + kanji[i])
      .catch((error) => console.error('Error:', error));

    if (response.ok) {
      /** @type {Promise<KanjiData>} */
      const data = await response.json();
      allKanjiData.push(data)
    }
    else {
      return Promise.reject("Could not connect to API.")
    }
  }

  return allKanjiData
}