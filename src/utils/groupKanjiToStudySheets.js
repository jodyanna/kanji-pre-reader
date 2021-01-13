
/**
 * Sort an Array of Objects into a two-dimensional Array with nested Arrays having a max length of 7 (holds 8).
 * @param {Array<KanjiData>} kanjiData - Array of Kanji data objects from kanjiapi.dev.
 * @returns {Array<Array<KanjiData>>} pages - Two-dimensional Array
 */
export const groupKanjiToStudySheets = kanjiData => {
  /**
   * Each page Array in pages holds a max of 8 KanjiData.
   * @type {Array<Array<KanjiData>>}
   */
  const pages = [];
  /** @type {Array<KanjiData>} */
  let tempPage = [];
  /**
   * Max length of tempPage.
   * @type {number}
   */
  const pageLengthLimit = 7;

  for (let i = 0; i < kanjiData.length; i++) {
    // When current tempPage is at limit, add to pages and start new tempPage
    if (i % pageLengthLimit === 0 && i > 0) {
      tempPage.push(kanjiData[i]);
      pages.push(tempPage);
      tempPage = [];
    }
    // When last input, add current tempPage to pages
    else if (i === kanjiData.length - 1) {
      tempPage.push(kanjiData[i]);
      pages.push(tempPage);
      tempPage = [];
    }
    // Limit not reached, just add to tempPage
    else tempPage.push(kanjiData[i]);
  }

  return pages
}
