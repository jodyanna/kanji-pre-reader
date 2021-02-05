import html2canvas from "html2canvas";

/**
 * Image data for study sheet.
 * @typedef {Object} ImagePNG
 * @property {string} src - Image source data.
 * @property {number} width - Image width in pixels.
 * @property {number} height - Image height in pixels.
 */

/**
 * Returns image data of first study sheet for displaying as preview.
 * @returns {Promise<ImagePNG>}
 */
export const renderPreview = async () => {
  /** @type {string} */
  const firstStudySheetID = "#pdf-0";
  const canvas = await html2canvas(document.querySelector(firstStudySheetID), {
    width: 1275,
    height: 1650
  })
  /** @type {ImagePNG} */
  const img = {};
  img.src = canvas.toDataURL("image/png");
  // scale image down by 10x
  img.width = img.width / 10;
  img.height = img.height / 10;

  return img
}
