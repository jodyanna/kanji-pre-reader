
export const parseKanjiFromText = text => {
  const kanjiRegX = /[\u4e00-\u9faf\u3400-\u4dbf]/g

  // use set to remove duplicates
  return [...new Set(text.match(kanjiRegX))]
}
