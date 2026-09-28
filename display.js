let welcomeMessage = `Welcome to ${portfolio.owner.name}'s portfolio!`;
console.log(welcomeMessage);

let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;
document.write(headerHTML);

let aboutHTML = `
    <section id="about">
        <h2>About Me</h2>
        <p>${portfolio.owner.bio}</p>
        <p>📧 <a href="mailto:${portfolio.owner.email}">${portfolio.owner.email}</a></p>
    </section>
`;
document.write(aboutHTML);

let skillsHTML = '<section id="skills"><h2>My Skills</h2>';

for (let i = 0; i < categoryNames.length; i++) {
    let categorySkills = portfolio.skillCategories[categoryNames[i]];

    skillsHTML = skillsHTML + `<h3 class="skill-category">${categoryNames[i]}</h3><ul class="skills-list">`;
    for (let j = 0; j < categorySkills.length; j++) {
        skillsHTML = skillsHTML + `<li>${categorySkills[j]}</li>`;
    }
    skillsHTML = skillsHTML + '</ul>';
}

skillsHTML = skillsHTML + '</section>';
document.write(skillsHTML);

let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];

    let matches = false;
    for (let t = 0; t < project.technologies.length; t++) {
        if (project.technologies[t] === showOnly) {
            matches = true;
        }
    }

    let queryMatches = true;
    let titleHTML = project.title;
    if (query !== "") {
        let lowerQuery = query.toLowerCase();
        let lowerTitle = project.title.toLowerCase();

        let titleMatch = lowerTitle.includes(lowerQuery);
        let descriptionMatch = project.description.toLowerCase().includes(lowerQuery);
        let techMatch = false;
        for (let t = 0; t < project.technologies.length; t++) {
            if (project.technologies[t].toLowerCase().includes(lowerQuery)) {
                techMatch = true;
            }
        }
        queryMatches = titleMatch || descriptionMatch || techMatch;

        if (titleMatch) {
            let start = lowerTitle.indexOf(lowerQuery);
            let end = start + lowerQuery.length;
            titleHTML = project.title.slice(0, start) +
                "<mark>" + project.title.slice(start, end) + "</mark>" +
                project.title.slice(end);
        }
    }

    if ((showOnly === "all" || matches) && queryMatches) {
        let tagsHtml = "";
        for (let j = 0; j < project.technologies.length; j++) {
            tagsHtml += "<span class='tag'>" + project.technologies[j] + "</span>";
        }

        projectsHTML = projectsHTML + `
            <article class="project-card">
                <h3>${titleHTML}</h3>
                <p>${project.description}</p>
                <p class="tech">Technologies: ${tagsHtml}</p>
                <p class="date">Completed: ${project.completionDate}</p>
            </article>
        `;
    }
}

projectsHTML = projectsHTML + '</div></section>';
document.write(projectsHTML);

let techNames = [];
let techCounts = [];

for (let i = 0; i < portfolio.projects.length; i++) {
    let technologies = portfolio.projects[i].technologies;

    for (let j = 0; j < technologies.length; j++) {
        let foundIndex = -1;
        for (let k = 0; k < techNames.length; k++) {
            if (techNames[k] === technologies[j]) {
                foundIndex = k;
            }
        }

        if (foundIndex === -1) {
            techNames.push(technologies[j]);
            techCounts.push(1);
        } else {
            techCounts[foundIndex] = techCounts[foundIndex] + 1;
        }
    }
}

document.write('<section id="tech-counts"><h2>Technology Breakdown</h2>');
for (let i = 0; i < techNames.length; i++) {
    document.write(`<p class="tech-count">${techCounts[i]} projects use ${techNames[i]}</p>`);
}
document.write('</section>');

let totalSkills = 0;
for (let i = 0; i < categoryNames.length; i++) {
    totalSkills = totalSkills + portfolio.skillCategories[categoryNames[i]].length;
}

console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${totalSkills} skills`);
console.log(`and ${portfolio.projects.length} projects`);

for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

let latestTitle = portfolio.projects[0].title;
let latestDate = portfolio.projects[0].completionDate;

for (let i = 1; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].completionDate > latestDate) {
        latestTitle = portfolio.projects[i].title;
        latestDate = portfolio.projects[i].completionDate;
    }
}

console.log("Most recent project: " + latestTitle + " (" + latestDate + ")");

let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);
