import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

/**
 * Create PDF doc from StudySheet component, then download to client.
 * @param {number} pages - number of pages of PDF doc.
 */
export const downloadPDF = async pages => {
  const pdf = new jsPDF({
    format: [2550, 3300], // width and height for letter sized paper in pixels
    unit: "px",
    hotfixes: ["px_scaling"],
  });

  for (let i = 0; i < pages; i++) {
    // Select current study sheet component
    const canvas = await html2canvas(document.querySelector(`#pdf-${i}`));

    // Insert new page after default page
    if (i !== 0) pdf.insertPage(i);

    // Create image data and add to pdf document
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'JPEG', 0, 0, 2550, 3300, `page-${i}`, "SLOW");

    // Download only on last iteration
    if (i === pages - 1) pdf.save("download.pdf");
  }
}
