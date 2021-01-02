
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