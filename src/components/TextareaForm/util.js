

/**
 * Converts hex to integer
 * @param {Array<string>} hexes - Array of hex values
 * @returns {Array<number>}
 */
const convertHexesToNums = hexes => {
  const nums = [];
  for (let i = 0; i < hexes.length; i++) {
    if (typeof hexes[i] === "string") nums[i] = parseInt(hexes[i], 16)
  }
  return nums
}

/**
 *
 * @param {Array<string>} kanji
 * @returns {Array<string>}
 */
const convertKanjiToHexes = kanji => {

}

module.exports = {
  convertHexesToNums: convertHexesToNums,
}
