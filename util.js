
// Utility: if exportPagePDF not defined, define a simple wrapper using html2canvas/jsPDF loaded on pages.
async function exportPagePDF_original(selector, filename){
  if(window.exportPagePDF){ return window.exportPagePDF(selector, filename); }
  if(window.html2canvas && window.jspdf){ const el=document.querySelector(selector)||document.body; const canvas=await html2canvas(el); const imgData=canvas.toDataURL('image/png'); const { jsPDF }=window.jspdf; const pdf=new jsPDF(); const imgProps=pdf.getImageProperties(imgData); const pdfWidth=pdf.internal.pageSize.getWidth()-20; const pdfHeight=(imgProps.height*pdfWidth)/imgProps.width; pdf.addImage(imgData,'PNG',10,10,pdfWidth,pdfHeight); pdf.save(filename); } else { alert('ابزار PDF در دسترس نیست'); }
}
