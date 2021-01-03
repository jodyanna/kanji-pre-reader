import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

/**
 * Create PDF doc from StudySheet component, then download to client.
 * @param {number} pages - number of pages of PDF doc.
 */
export const downloadPDF = pages => {
  const pdf = new jsPDF({
    format: [2550, 3300], // width and height for letter sized paper in pixels
    unit: "px",
    hotfixes: ["px_scaling"],
  });

  for (let i = 0; i < pages; i++) {
    // select page from DOM using id selectors
    html2canvas(document.querySelector(`#pdf-${i}`))
      .then(canvas => {
        // Insert new page after default page
        if (i !== 0) pdf.insertPage(i);
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'JPEG', 0, 0, 2550, 3300);
      })
      .then(() => pdf.save("download.pdf"))
      .catch(err => console.log(err))
  }
}
