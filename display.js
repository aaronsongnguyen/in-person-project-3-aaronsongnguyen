// Week 4 JavaScript Portfolio Project - Display Generation
// Students will learn to generate HTML using JavaScript template literals

// TODO: During class, we'll build HTML strings using our portfolio data

// Example 1: Simple template literal (students will try this first)
// let welcomeMessage = `Welcome to ${portfolio.owner.name}'s portfolio!`;
// console.log(welcomeMessage);

// TODO: Students will build the header section
// Instructor will demonstrate, then students will code along
/*
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;

// We'll use document.write() for immediate visual feedback
document.write(headerHTML);
*/

// TODO: Students will build the skills section
// This uses a simple for loop (they know array.length and array[i])
/*
let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

// Using a basic for loop to add each skill
for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);
*/

// TODO: Students will build the projects section
// This is more complex because we're working with an array of objects
/*
let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    
    // Build the technologies list
    let techList = project.technologies.join(", ");
    
    projectsHTML = projectsHTML + `
        <article class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${techList}</p>
            <p class="date">Completed: ${project.completionDate}</p>
        </article>
    `;
}

projectsHTML = projectsHTML + '</div></section>';
document.write(projectsHTML);
*/

// TODO: Advanced students can try creating different versions
// Example: Only show featured projects
/*
let featuredProjectsHTML = '<section><h2>Featured Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    
    // Only include if featured is true
    if (project.featured === true) {
        let techList = project.technologies.join(", ");
        featuredProjectsHTML = featuredProjectsHTML + `
            <article class="project-card">
                <h3>${project.title} ⭐</h3>
                <p>${project.description}</p>
                <p class="tech">Technologies: ${techList}</p>
            </article>
        `;
    }
}

featuredProjectsHTML = featuredProjectsHTML + '</div></section>';
document.write(featuredProjectsHTML);
*/

// INSTRUCTOR NOTES:
// - Start with simple template literals
// - Show how to access object properties
// - Demonstrate array iteration with for loops
// - Use console.log() to debug each step
// - Build HTML strings step by step
// - Use document.write() to display results immediately