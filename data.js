// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Your Name Here",        // TODO: Add your name
        title: "Your Title Here",      // TODO: Add your professional title
        email: "your.email@example.com", // TODO: Add your email
        location: "Your City, State",  // TODO: Add your location
        bio: "Write a brief description about yourself here. What are you passionate about? What are your goals?" // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Add your first skill here",   // TODO: Replace with your actual skills
        "Add your second skill here",  // TODO: Add more skills
        "Add your third skill here"    // TODO: Students should have at least 5 skills
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Your First Project",
            description: "Describe what this project does and why it's interesting",
            technologies: ["HTML", "CSS"], // Array of technologies used
            completionDate: "2025-08-15",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Your Second Project", 
            description: "Another project description here",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-01",
            featured: false
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);