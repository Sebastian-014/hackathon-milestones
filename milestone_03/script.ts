
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values

    const name = (document.getElementById('name') as HTMLInputElement).value
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const certifications = (document.getElementById('certifications') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHTML = `
    
    <h2><b> Resume </b></h2>

    <br />

    <h3>PERSONAL INFORMATION :</h3>

    <p><b>Name :</b>${name}</p>
    <p><b>Father's name :</b>${fathername}</p>
    <p><b>Email :</b>${email}</p>
    <p><b>Phone :</b>${phone}</p>

    <br />

    <h3>EDUCATION :</h3>
    <p>${education}</p>

    <br />

    <h3>EXPERIENCE :</h3>
    <p>${experience}</p>

    <br />

    <h3>CERTIFICATIONS :</h3>
    <p>${certifications}</p>

    <br />

    <h3>SKILLS :</h3>
    <p>${skills}</p>

    `;

    // Display generated resume

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;

    }

}
);