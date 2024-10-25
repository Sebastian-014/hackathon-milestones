var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var certifications = document.getElementById('certifications').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    \n    <h2><b> Resume </b></h2>\n\n    <br />\n\n    <h3>PERSONAL INFORMATION :</h3>\n\n    <p><b>Name :</b>".concat(name, "</p>\n    <p><b>Father's name :</b>").concat(fathername, "</p>\n    <p><b>Email :</b>").concat(email, "</p>\n    <p><b>Phone :</b>").concat(phone, "</p>\n\n    <br />\n\n    <h3>EDUCATION :</h3>\n    <p>").concat(education, "</p>\n\n    <br />\n\n    <h3>EXPERIENCE :</h3>\n    <p>").concat(experience, "</p>\n\n    <br />\n\n    <h3>CERTIFICATIONS :</h3>\n    <p>").concat(certifications, "</p>\n\n    <br />\n\n    <h3>SKILLS :</h3>\n    <p>").concat(skills, "</p>\n\n    ");
    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
});
