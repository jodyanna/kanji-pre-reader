import html2canvas from "html2canvas";

export const renderPreview = async () => {
  const firstStudySheetID = "#pdf-0";
  const canvas = await html2canvas(document.querySelector(firstStudySheetID), {
    width: 1275,
    height: 1650
  })
  const img = {};
  img.src = canvas.toDataURL("image/png");
  // scale image down by 10x
  img.width = img.width / 10;
  img.height = img.height / 10;

  return img
}
