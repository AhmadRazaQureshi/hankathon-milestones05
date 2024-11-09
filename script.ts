


// Import necessary librarie


// Get HTML elements
const ResumeForm = document.getElementById('resume-form') as HTMLFormElement;
const SareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const ShareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const DownloadPdfBtn = document.getElementById('download-pdf') as HTMLButtonElement;

// Function to generate resume
function generateResume() {
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Generate resume HTML
  const resumeHtml = `
    <h1>${name} (${username})</h1>
    <p>Email: ${email}, Phone: ${phone}</p>
    <h2>Education</h2>
    <p>${education}</p>
    <h2>Experience</h2>
    <p>${experience}</p>
    <h2>Skills</h2>
    <p>${skills}</p>
  `;

  // Display generated resume
  resumeDisplay.innerHTML = resumeHtml;

  // Generate shareable link
  const url = URL.createObjectURL(new Blob([resumeHtml], { type: 'text/html' }));
  shareableLink.href = url;
  shareableLink.textContent = url;

  // Show shareable link container
  shareableLinkContainer.style.display = 'block';
}

// Function to download resume as PDF
function downloadPdf() {
  const pdf = new downloadPdf();
  pdf.text(resumeDisplay.innerHTML, 10, 10);
  pdf.save('resume.pdf');
}

// Add event listeners
resumeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  generateResume();
});

downloadPdfBtn.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
    });



