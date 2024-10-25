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
    var resumeHTML = "\n    \n    <h2><b> Editable Resume </b></h2>\n\n    <br />\n\n    <h3>PERSONAL INFORMATION :</h3> \n\n    <p><b>Name :</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Father's name :</b><span contenteditable =\"true\">").concat(fathername, "</span></p>\n    <p><b>Email :</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>Phone :</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n\n    <br />\n\n    <h3>EDUCATION :</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n\n    <br />\n\n    <h3>EXPERIENCE :</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n\n    <br />\n\n    <h3>CERTIFICATIONS :</h3>\n    <p contenteditable =\"true\">").concat(certifications, "</p>\n\n    <br />\n\n    <h3>SKILLS :</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n\n    ");
    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
});
