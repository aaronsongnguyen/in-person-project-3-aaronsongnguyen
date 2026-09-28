const showOnly = "all";
const query = "";

const categoryNames = ["Frontend", "Tools"];

const portfolio = {
    owner: {
        name: "Aaron Nguyen",
        title: "Aspiring Web Developer & Information Science Student",
        email: "aaron.nguyen@example.com",
        location: "Berkeley, CA",
        bio: "I'm learning to build websites that are clear, accessible, and fun to use. Right now I'm moving from static HTML and CSS into JavaScript, and I'm excited to keep turning ideas into real, data-driven pages."
    },

    skillCategories: {
        Frontend: [
            "HTML5 & Semantic Markup",
            "CSS3 & Responsive Design",
            "JavaScript Fundamentals"
        ],
        Tools: [
            "Git & GitHub",
            "VS Code",
            "Browser DevTools"
        ]
    },

    projects: [
        {
            title: "Static Portfolio Site",
            description: "My Week 3 portfolio: semantic HTML, a fixed navigation bar, and a responsive CSS layout.",
            technologies: ["HTML", "CSS"],
            completionDate: "2026-09-14",
            featured: true
        },
        {
            title: "Data-Driven Portfolio",
            description: "This page! All of the content lives in JavaScript objects and arrays and is rendered with template literals.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2026-09-28",
            featured: true
        },
        {
            title: "Recipe Card Layout",
            description: "A responsive grid of recipe cards that reflows from three columns down to one on mobile.",
            technologies: ["HTML", "CSS"],
            completionDate: "2026-09-07",
            featured: false
        },
        {
            title: "Tip Calculator JS",
            description: "A small script that splits a restaurant bill and tip between friends and prints the results to the console.",
            technologies: ["JavaScript"],
            completionDate: "2026-09-21",
            featured: false
        }
    ],

    availability: {
        freelance: false,
        fullTime: false,
        partTime: true
    }
};

console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);
console.log("My name:", portfolio.owner.name);
console.log("Email:", portfolio.owner.email);
console.log("First Frontend skill:", portfolio.skillCategories.Frontend[0]);
console.log("Number of projects:", portfolio.projects.length);
console.log("First project:", portfolio.projects[0]);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);
