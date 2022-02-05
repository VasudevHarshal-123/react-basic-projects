import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./styles/ResumeDownload.css";

function ResumeDownload(props) {

  const printDocument = () => {
    const input = document.getElementById('resume-wrapper');
    html2canvas(input)
      .then((canvas) => {

        const imgData = canvas.toDataURL('image/png');
        console.log("clicked",typeof(imgData))
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 10, 10);
        pdf.save("download.pdf");
      })
  };

  return (
  <div className="resume-download-wrapper">
      Download
  </div>
  )
}

export default ResumeDownload;
