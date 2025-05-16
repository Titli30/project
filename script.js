function startBuilding() {
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.form-section').classList.remove('hidden');
}

function addExperience() {
  const container = document.getElementById('experienceSection');
  const entry = document.createElement('div');
  entry.classList.add('exp-entry');
  entry.innerHTML = `
    <input type="text" placeholder="Job Title" class="jobTitle" />
    <input type="text" placeholder="Company Name" class="company" />
    <input type="text" placeholder="Duration" class="duration" />
    <textarea placeholder="Job Responsibilities" class="jobDetails" rows="3"></textarea>
  `;
  container.appendChild(entry);
}

function addEducation() {
  const container = document.getElementById('educationSection');
  const entry = document.createElement('div');
  entry.classList.add('edu-entry');
  entry.innerHTML = `
    <input type="text" placeholder="Degree" class="degree" required />
    <input type="text" placeholder="Institution" class="institution" required />
    <input type="text" placeholder="Duration" class="eduDuration" required />
  `;
  container.appendChild(entry);
}

function addProject() {
  const container = document.getElementById('projectSection');
  const entry = document.createElement('div');
  entry.classList.add('project-entry');
  entry.innerHTML = `
    <input type="text" placeholder="Project Title" class="projectTitle" />
    <textarea placeholder="Project Description" class="projectDesc" rows="3"></textarea>
    <input type="text" placeholder="Project Link" class="projectLink" />
  `;
  container.appendChild(entry);
}

document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const output = document.getElementById('resumeOutput');
  const name = document.getElementById('fullName').value;
  const title = document.getElementById('title').value;
  const profile = document.getElementById('profile').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const skills = document.getElementById('skills').value;
  const languages = document.getElementById('languages').value;

  let experienceHTML = '';
  document.querySelectorAll('.exp-entry').forEach(exp => {
    const jobTitle = exp.querySelector('.jobTitle').value;
    if (jobTitle.trim() !== '') {
      experienceHTML += `
        <div>
          <h4>${jobTitle} - ${exp.querySelector('.company').value}</h4>
          <p><strong>${exp.querySelector('.duration').value}</strong></p>
          <p>${exp.querySelector('.jobDetails').value}</p>
        </div>
      `;
    }
  });

  let educationHTML = '';
  document.querySelectorAll('.edu-entry').forEach(edu => {
    educationHTML += `
      <div>
        <h4>${edu.querySelector('.degree').value}</h4>
        <p>${edu.querySelector('.institution').value}</p>
        <p><strong>${edu.querySelector('.eduDuration').value}</strong></p>
      </div>
    `;
  });

  let projectHTML = '';
  document.querySelectorAll('.project-entry').forEach(proj => {
    const title = proj.querySelector('.projectTitle').value;
    if (title.trim() !== '') {
      const link = proj.querySelector('.projectLink').value;
      projectHTML += `
        <div>
          <h4>${title}</h4>
          <p>${proj.querySelector('.projectDesc').value}</p>
          ${link ? `<a href="${link}" target="_blank">${link}</a>` : ''}
        </div>
      `;
    }
  });

  output.innerHTML = `
    <h2>${name}</h2>
    <h3>${title}</h3>
    <p>${profile}</p>
    <p>📧 ${email} | 📞 ${phone} | 📍 ${address}</p>
    <h3>Experience</h3>${experienceHTML}
    <h3>Education</h3>${educationHTML}
    <h3>Projects</h3>${projectHTML}
    <h3>Skills</h3><p>${skills}</p>
    <h3>Languages</h3><p>${languages}</p>
  `;
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const element = document.getElementById('resumeOutput');
  html2pdf().from(element).save('resume.pdf');
});

// Stub functions for demo
function switchTheme() {
  alert("Theme switcher clicked (demo only)");
}

function switchTemplate() {
  alert("Template switcher clicked (demo only)");
}
