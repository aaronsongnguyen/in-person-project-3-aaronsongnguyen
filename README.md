# Week 5 In-Class Project: Data-Driven Portfolio Foundation

## Project Overview

Transform your Week 3 static portfolio into a data-driven structure using JavaScript objects and arrays. This project focuses on organizing content with JavaScript data structures and generating HTML using template literals - building on the JavaScript fundamentals you learned in Chapters 2-3.

## Learning Objectives

By the end of this project, students will be able to:
1. ✅ Organize portfolio content using JavaScript objects and arrays
2. ✅ Access nested object properties and array elements
3. ✅ Use template literals to build HTML strings dynamically
4. ✅ Generate content using `document.write()` and simple loops
5. ✅ Create HTML5 forms with various input types
6. ✅ Use browser DevTools console for data exploration and debugging

## What You'll Build

**Before (Week 3):** Static HTML with hardcoded content
**After (Week 5):** Data-driven portfolio that generates content from JavaScript

### File Structure
```
week5-portfolio/
├── index.html       # HTML structure with script tags
├── style.css        # CSS styling (built on Week 3)
├── data.js          # Portfolio data in objects/arrays
└── display.js       # HTML generation logic
```

## Project Phases

### Phase 1: Data Organization (15 minutes)

#### Step 1.1: Set Up Your Data Structure
In `data.js`, you'll organize your portfolio information:

```javascript
const portfolio = {
    owner: {
        name: "Your Name",
        title: "Your Professional Title",
        email: "your.email@example.com",
        location: "Your City, State",
        bio: "Tell your story..."
    },
    
    skills: [
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "JavaScript Fundamentals",
        "Add more skills..."
    ],
    
    projects: [
        {
            title: "Project Name",
            description: "What does this project do?",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-15",
            featured: true
        }
    ]
};
```

#### Step 1.2: Explore Your Data
Use `console.log()` to understand your data structure:

```javascript
console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);
```

### Phase 2: HTML Generation (20 minutes)

#### Step 2.1: Create Header Section
In `display.js`, use template literals to build HTML:

```javascript
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;

document.write(headerHTML);
```

#### Step 2.2: Generate Skills List
Use a simple for loop to create your skills section:

```javascript
let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);
```

#### Step 2.3: Build Projects Showcase
Create project cards from your data:

```javascript
let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    let techList = project.technologies.join(", ");
    
    projectsHTML = projectsHTML + `
        <article class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${techList}</p>
        </article>
    `;
}

projectsHTML = projectsHTML + '</div></section>';
document.write(projectsHTML);
```

### Phase 3: Enhanced Forms (10 minutes)

#### Step 3.1: HTML5 Input Types
Add various HTML5 inputs to your contact form:

```html
<!-- Text input -->
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>

<!-- Email input (HTML5) -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<!-- Phone input (HTML5) -->
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone">

<!-- Date input (HTML5) -->
<label for="start-date">Preferred Start Date:</label>
<input type="date" id="start-date" name="start-date">

<!-- Number input -->
<label for="budget">Budget (USD):</label>
<input type="number" id="budget" name="budget" min="0" step="100">
```

#### Step 3.2: Radio Buttons and Checkboxes
```html
<fieldset>
    <legend>Preferred Contact Method:</legend>
    <input type="radio" id="contact-email" name="contact" value="email">
    <label for="contact-email">Email</label>
    <input type="radio" id="contact-phone" name="contact" value="phone">
    <label for="contact-phone">Phone</label>
</fieldset>

<fieldset>
    <legend>Project Timeline:</legend>
    <input type="checkbox" id="asap" name="timeline" value="asap">
    <label for="asap">ASAP</label>
    <input type="checkbox" id="flexible" name="timeline" value="flexible">
    <label for="flexible">Flexible</label>
</fieldset>
```

### Phase 4: Console Practice (10 minutes)

#### Step 4.1: Data Analysis
Practice accessing and analyzing your data:

```javascript
// Create summary statistics
console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

// Find featured projects
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}
```

#### Step 4.2: JSON Exploration
```javascript
// Convert to JSON for storage/debugging
let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);
```

## Key Concepts Used

### ✅ What You Know (Chapters 1-3)
- **Variables**: `let`, `const`, `var`
- **Data Types**: strings, numbers, booleans, arrays, objects
- **String Methods**: `.join()`, `.length`
- **Template Literals**: `` `Hello ${name}` ``
- **Object Access**: `portfolio.owner.name`
- **Array Access**: `skills[0]`, `skills.length`
- **For Loops**: Basic iteration with indices
- **Console Methods**: `console.log()`
- **Output**: `document.write()`

## Success Criteria

Your portfolio should demonstrate:
1. ✅ **Data Organization**: Content stored in logical objects/arrays
2. ✅ **Dynamic Generation**: HTML created from data using template literals
3. ✅ **Working Output**: Content displays correctly on the page
4. ✅ **Form Enhancement**: Multiple HTML5 input types working
5. ✅ **Console Usage**: Data exploration visible in browser console
6. ✅ **Personalization**: Your own content and information

## Tips for Success

### Data Organization
- Keep objects flat and simple
- Use descriptive property names
- Store repeating items (skills, projects) as arrays
- Use consistent data types

### HTML Generation
- Build HTML strings step by step
- Use `+` to concatenate strings
- Test template literals with `console.log()` first
- Keep generated HTML valid and semantic

### Debugging
- Use `console.log()` frequently to check your data
- Test each section independently
- Check the browser console for errors
- Validate your HTML structure

### Form Best Practices
- Always include `label` elements with `for` attributes
- Use appropriate `input` types for better UX
- Add `required` attribute for mandatory fields
- Test form validation by submitting

## Common Challenges & Solutions

### Challenge: "My template literals aren't working"
**Solution**: Make sure you're using backticks (`` ` ``) not regular quotes (`'` or `"`)

### Challenge: "I can't access my nested data"
**Solution**: Use dot notation step by step: `portfolio.owner.name`

### Challenge: "My for loop isn't working"
**Solution**: Check your array length: `for (let i = 0; i < array.length; i++)`

### Challenge: "Nothing appears on the page"
**Solution**: Check that your JavaScript files are loaded in the correct order

### Challenge: "My HTML looks broken"
**Solution**: Make sure to close all HTML tags in your template literals

## Extension Activities

If you finish the core early, these are not bonus-credit busywork. They are the same kind of thinking you did in the core, aimed at slightly less obvious problems. Work through the tiers in order and stop wherever your time runs out; nothing here is required to complete the project, and nothing here is graded either way. Tiers 1 and 2 use only tools we have already covered: `if`, indexed `for` loops, plain variables, arrays (including `.push()` to add an item), objects (including bracket notation), template literals, string comparison, `console.log`, and `JSON.stringify`. Tier 3 adds four string methods we have not used in class yet: `.toLowerCase()`, `.includes()`, `.indexOf()`, and `.slice()`; its hint says what each one returns. Nothing here needs a function declaration, an array method such as `map`/`filter`/`forEach`, `Object.keys`/`for...in`, a DOM API, or `fetch`. Those stay Week 6 and later.

### Tier 1 (about 10 to 15 minutes): do both

**1. Make your display config-driven**
- **Goal:** Let one variable at the top of `data.js` control which projects show up on the page.
- **Done when:** changing `const showOnly = "JavaScript";` to a different technology (or to `"all"`) changes which project cards render, by wrapping your existing card-building code in a check rather than adding a second loop over your projects array (a small inner loop over one project's own technologies, to check for a match, is expected and is not what this rule bans), and a project shows up whenever ANY of its technologies matches, not only the first one listed. This only affects your main project-card loop; you do not need to touch the Phase 4.1 featured-project search for this task.
- **Hint:** `data.js` and `display.js` load as separate `<script>` tags in `index.html`, in that order, so a `const` declared at the top level of `data.js` (which finishes running before `display.js`'s projects loop starts) is visible inside `display.js`. Inside your existing projects loop (substitute your own loop variable below: `project` if you declared one per iteration, or `projects[i]` if you index directly), before building each card, run a small inner check over that project's technologies: `let matches = false; for (let t = 0; t < project.technologies.length; t++) { if (project.technologies[t] === showOnly) { matches = true; } }` and then wrap the card-building code in `if (showOnly === "all" || matches) { ... }`. The comparison is case-sensitive, so `showOnly` has to match a technology's spelling and capitalization exactly (`"JavaScript"`, not `"javascript"`). A version that only checks `project.technologies[0]` will wrongly hide projects whose matching technology is not listed first; that is a bug, not a shortcut.
- **Why it matters:** a single flag that changes what renders is the same pattern behind feature flags and A/B tests in production software.

**2. Surface your most recent project**
- **Goal:** Print a line to the console telling you which of your projects is the most recent.
- **Done when:** your console shows the correct title even after you reorder the `projects` array in `data.js` (assuming no two of your projects share the exact same `completionDate`; a genuine tie is an edge case this task does not require handling).
- **Hint:** Your starter `data.js` already gives every project a `completionDate: "YYYY-MM-DD"` field (Phase 4 uses the same project objects); if yours is missing one, add a date string to each project first. Track two "latest so far" variables outside your loop, `latestTitle` and `latestDate`; set both TO the first project's title and date before the loop starts (not to an empty string), then compare each later project's `completionDate` against `latestDate` and update both variables together whenever you find a later date. `completionDate` strings are `"YYYY-MM-DD"`, so comparing them directly with `>` gives the right answer with no new tools. If two projects genuinely tie on the exact same date, which one prints can depend on the array's order; that is fine, there is no required tie-break rule. Any clear console line works, e.g. `console.log("Most recent project: " + latestTitle);`.
- **Why it matters:** "what is newest" is one of the most common real-world data questions; it is the logic behind every "last updated" line you have ever seen.

### Tier 2 (about 15 to 20 minutes): pick one task, or do both if you have time; neither is required

**3. Break technologies into tags, with a real count**
- **Goal:** Show each technology as its own tag element on the page, plus one summary line per technology, also on the page, like "3 projects use JavaScript", whose number is computed from your data, not typed by hand.
- **Done when:** the page shows individual `<span class="tag">` elements per technology (instead of one joined string) for every project; the page also shows one correct count line for every distinct technology, counted across ALL of your projects regardless of anything Tier 1's `showOnly` filter is currently hiding (the counts and the Tier 1 filter are independent; do not wire them together). One known limitation, matching the hint below: if the exact same technology name shows up twice inside one project's own `technologies` list (which your own data probably does not), that project gets counted twice for that technology; you do not need to fix that. Your starter `style.css` does not ship a `.tag` style, so add a simple one (a border, some padding, a small border-radius); the exact look is not graded. A count line reading "1 projects use CSS" for a count of one is fine; you do not need to handle singular/plural grammar.
- **Hint:** You do not have `Object.keys` or `for...in` yet, so track counts with two parallel arrays instead of an object (a different, useful pattern from Task 4's grouped-object approach below; the two tasks are independent): `let techNames = []; let techCounts = [];`. For each project (outer loop, `i`), for each technology in that project's `technologies` array (inner loop, use a different variable like `j`; reusing `i` here overwrites your outer loop's counter and breaks it), search `techNames` with a third loop (another variable, e.g. `k`) to see if it is already there, tracking the position with a `foundIndex` variable that starts at `-1` and gets set when you find a match. If `foundIndex` stayed `-1`, `push` the name onto `techNames` and `push(1)` onto `techCounts`; otherwise add 1 to `techCounts[foundIndex]`. (If the same technology name shows up twice in one project's own list, this simple version double-counts it for that project, an edge case you likely will not hit with your own data.) For the tags themselves: inside your existing project-card loop, reuse that same inner `j` loop over the project's `technologies` array to build a string with `+=`, something like `let tagsHtml = ""; for (let j = 0; j < project.technologies.length; j++) { tagsHtml += "<span class='tag'>" + project.technologies[j] + "</span>"; }`, and put `${tagsHtml}` into your card's template literal where `${techList}` (the old `.join(", ")` result) used to be, so the tags land inside each card; your Phase 2.3 code keeps its single `document.write()` after the loop (a `document.write()` inside the loop would print the tags above all the cards). After all projects are rendered, loop over `techNames` with an indexed `for` and `document.write()` one line per technology: `` `${techCounts[i]} projects use ${techNames[i]}` ``.
- **Why it matters:** tallying occurrences with parallel arrays (or a lookup object once you have one) is the core of every "most popular tag" or "top categories" feature you will build later.

**4. Group your skills by category**
- **Goal:** Show your skills grouped under headings (e.g. "Frontend", "Tools") instead of one flat list.
- **Done when:** the page shows one heading per category, with only that category's skills listed underneath, and your Phase 2 skills-loop code has been updated to work with the new shape (you WILL need to change that existing code; that is expected, not something you broke).
- **Hint:** In `data.js`, replace your existing top-level `skills: [...]` property with a new top-level `skillCategories: { Frontend: [...], Tools: [...] }` property (same shared data object, new property name and shape). Then declare `categoryNames` as its own separate top-level `const`, not a property inside that data object, e.g. `const categoryNames = ["Frontend", "Tools"];`. Yes, you will type each category name twice (once as a key in `skillCategories`, once in `categoryNames`); that is a known limitation of not having `Object.keys` yet, not a trick you are missing. Loop over `categoryNames` on the outside, and use bracket notation to get each inner array, matching whatever pattern you already use to reach your other data (if your Task 1 code reads `portfolio.projects`, use `portfolio.skillCategories[categoryNames[i]]`; if `data.js` instead declares separate top-level consts directly, use `skillCategories[categoryNames[i]]`). If a category name contains a space (e.g. `"Dev Tools"`), it still works as an object key; wrap it in quotes wherever you write it: `"Dev Tools": [...]`. If your existing skills are objects (e.g. `{ name, level }`) rather than plain strings, that is fine: group by assigning each skill's whole object under whichever category you pick; the grouping loop does not care what is inside each array element.
- **Why it matters:** nested, grouped data, not flat lists, is what almost every real UI actually renders (categories, folders, playlists).

### Tier 3 (about 15 to 25 minutes, a bounded search-and-highlight task): for the student who is still ahead

**5. Build a search with highlight**
- **Goal:** Add a search to your project cards. One variable at the top of `data.js`, `const query = "js";`, decides which projects render (the same hand-edited pattern as Tier 1's `showOnly`, not live typing), except it checks three fields (title, description, and every technology), ignores upper versus lower case, and marks where the match landed in each card's title.
- **Done when:** changing `query` changes which cards render. A project matches when the query appears anywhere inside its title, its description, or any one of its technology strings, compared case-insensitively (`"js"` matches `"Node.js"` and `"JS Weather App"`; a bare `"JavaScript"` entry has no "js" in it, so it does not match). In each rendered card, the FIRST place the query appears in the title is wrapped in `<mark>...</mark>`, keeping the title's own original letters: `"JS Weather App"` renders as `<mark>JS</mark> Weather App`, and `"Home Weather JS Tracker"` renders as `Home Weather <mark>JS</mark> Tracker`. A project that matches only through its description or technologies still renders, with its title plain and no `<mark>` in it. `const query = "";` turns the search off: every project that passes `showOnly` renders, none of them marked. The query check stacks on top of Tier 1's `showOnly` check: a card renders only when it passes both, so put the query check inside your existing card loop next to the `showOnly` check, before the card's HTML is written.
- **Ceiling, stop here:** the title is the only thing that ever gets a `<mark>`, and only its first match, even if the query appears twice. No regular expressions. Treat `query === ""` as its own case up front (no matching, no marking, `showOnly` still applies); do not let it run through your matching code (`.includes("")` is always `true` and `.indexOf("")` is always `0`, which would print an empty `<mark></mark>` on every title).
- **Hint:** Four string methods, four separate jobs. `.toLowerCase()` returns a lowercased copy and leaves the original alone; `"JS" === "js"` is `false`, so lowercase BOTH sides before every comparison. `.includes(text)` answers whether one string contains another (on a string this is a partial match; on an array it is an exact whole-element match, so check each technology string one at a time with a small inner loop, the same shape as Tier 1's, and record the result in a variable before you combine it with the title and description checks). `.indexOf(text)` returns the position where the match starts, or `-1` if there is none. `.slice(start, end)` returns the characters from `start` up to but NOT including `end`. Lowercasing never moves a character, so a position you find in a lowercased copy is the same position in the original title. Test with a match in the middle of a title, not only at the start; the two worked examples in Done when are the minimum test set.
- **Why it matters:** search-with-highlight is the pattern behind every "showing results for..." page you have used; finding WHERE a match sits in a string, not only whether one exists, is what makes a highlight possible at all.

## Next Steps (Future Weeks)

This data-driven foundation prepares you for:
- **Week 6**: Functions, array methods (`map`, `filter`), and your first interactive elements - JS Basics II and DOM & Events are one combined week this term
- **Week 7**: Rebuilding these same concepts as React components

## Resources

- [MDN: JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN: JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- [MDN: Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN: HTML5 Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
