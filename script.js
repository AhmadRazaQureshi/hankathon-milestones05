// Import necessary librarie
// Get HTML elements
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLink = document.getElementById('shareable-link');
var downloadPdfBtn = document.getElementById('download-pdf');
// Function to generate resume
function generateResume() {
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume HTML
    var resumeHtml = "\n    <h1>".concat(name, " (").concat(username, ")</h1>\n    <p>Email: ").concat(email, ", Phone: ").concat(phone, "</p>\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n    <h2>Experience</h2>\n    <p>").concat(experience, "</p>\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n  ");
    // Display generated resume
    resumeDisplay.innerHTML = resumeHtml;
    // Generate shareable link
    var url = URL.createObjectURL(new Blob([resumeHtml], { type: 'text/html' }));
    shareableLink.href = url;
    shareableLink.textContent = url;
    // Show shareable link container
    shareableLinkContainer.style.display = 'block';
}
// Function to download resume as PDF
function downloadPdf() {
    var pdf = new downloadPdf();
    pdf.text(resumeDisplay.innerHTML, 10, 10);
    pdf.save('resume.pdf');
}
// Add event listeners
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    generateResume();
});
downloadPdfBtn.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
});
