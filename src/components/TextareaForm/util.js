
/**
 * Converts hexes to integers
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
 * Converts single character strings to hexes
 * @param {Array<string>} chars - Array of single character strings
 * @returns {Array<string>}
 */
const convertCharsToHexes = chars => {
  const hexes = [];
  for (let i = 0; i < chars.length; i++) {
    hexes[i] = chars[i].charCodeAt(0).toString(16)
  }
  return hexes
}

// export functions as object
module.exports = {
  convertHexesToNums: convertHexesToNums,
  convertCharsToHexes: convertCharsToHexes,
}
