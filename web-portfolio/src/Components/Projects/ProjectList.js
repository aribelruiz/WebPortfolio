// Function for importing multiple images from folder
function importAll(folder) {
	let images = {};
  folder.keys().forEach((item, index) => { images[item.replace('./', '')] = folder(item); });
	return images
}

// Importing BrainBeats slide images
const bbImgs = importAll(require.context('../../Images/Projects/BrainBeats', false, /\.(png|jpe?g|svg)$/));
let bbSlides = [];
for (let i = 0; i < Object.keys(bbImgs).length; i++) {
    let img = bbImgs[`bb${i+1}.png`];
    bbSlides[i] = img;
}


// Importing Epilapse slide images
const epiImgs = importAll(require.context('../../Images/Projects/Epilapse', false, /\.(png|jpe?g|svg)$/));
let epiSlides = [];
for (let i = 0; i < Object.keys(epiImgs).length; i++) {
    let img = epiImgs[`epi${i+1}.png`];
    epiSlides[i] = img;
}

// Importing LongLiveDecay slide images
const lldImgs = importAll(require.context('../../Images/Projects/LongLiveDecay', false, /\.(png|jpe?g|svg)$/));
let lldSlides = [];
for (let i = 0; i < Object.keys(lldImgs).length; i++) {
    let img = lldImgs[`lld${i+1}.png`];
    lldSlides[i] = img;
}

// Importing Portfolio slide images
const portImgs = importAll(require.context('../../Images/Projects/PortfolioWeb', false, /\.(png|jpe?g|svg)$/));
let portSlides = [];
for (let i = 0; i < Object.keys(portImgs).length; i++) {
    let img = portImgs[`port${i+1}.png`];
    portSlides[i] = img;
}

// Importing TextAnalyzer slide images
const taImgs = importAll(require.context('../../Images/Projects/TextAnalyzer', false, /\.(png|jpe?g|svg)$/));
let taSlides = [];
for (let i = 0; i < Object.keys(taImgs).length; i++) {
    let img = taImgs[`ta${i+1}.png`];
    taSlides[i] = img;
}

// Importing Contact Manager slide images
const cmImgs = importAll(require.context('../../Images/Projects/ContactManager', false, /\.(png|jpe?g|svg)$/));
let cmSlides = [];
for (let i = 0; i < Object.keys(cmImgs).length; i++) {
    let img = cmImgs[`cm${i+1}.png`];
    cmSlides[i] = img;
}

// Importing RealEstate slide images
const nateImgs = importAll(require.context('../../Images/Projects/RealEstate', false, /\.(png|jpe?g|svg)$/));
let nateSlides = [];
for (let i = 0; i < Object.keys(nateImgs).length; i++) {
    let img = nateImgs[`nate${i+1}.png`];
    nateSlides[i] = img;
}
export const ProjectList = [
    {
        name: "Brain Beats V4",
        img: bbSlides[0],
        slides: bbSlides,
        tagline: "Music Sharing Platform",
        role: "Front-End Developer",
        timeline: 'Sep 2022 - May 2023',
        description: "Version 4 of a music sharing web app built for converting brain activity" +
        " into Musical Instrument Digital Interface files (MIDI).",
        contributions: "Modularized and refactored 9000+ lines of legacy code written in JavaScript and converted codebase to TypeScript• Wrote extensive documentation for future developers" +
        "• Contributed to 90% of frontend components and 95% of UI/UX within an agile environment in response to sponsor feedback• Worked alongside backend developers to integrate new features through external API endpoints and update internal API system",
        projectLink: "https://github.com/Brainbeats-v4/BrainBeatsv4",
        github: true,
        viewProject: false
    },
    {
        name: "Sold By Nate",
        img: nateSlides[5],
        slides: nateSlides,
        tagline: "Realtor Portfolio/Blog Website",
        role: "Front-End Developer",
        timeline: 'Oct 2023 - Oct 2023',
        description: "Freelance project containing a portfolio website, contact information, and a blog for a realtor to expand his platform and be easily available on both desktop and mobile." +
        "",
        contributions: "Communicated with a client to gather requirements, develop use case diagrams, and design the UI/UX with client feedback and approval• Developed the front-end within sprints using Agile development alongside a back-end developer" +
        "• Created reusable components within React using JavaScript, HTML, and SCSS.• Implemented a Django REST Framework to create functional frontend components",
        projectLink: "https://soldbynate-c5d4c3489c09.herokuapp.com/home",
        github: false,
        viewProject: true
    },
    {
        name: "Long Live Decay",
        img: lldSlides[0],
        slides: lldSlides,
        tagline: "Action/Adventure Video Game",
        role: "Full-Stack Developer",
        timeline: 'Jan 2022 - May 2022',
        description: "A single player 2.5D action/adventure game developed on Unity for PC. This game was awarded Best Technical Video Game for UCF's AI for Game Programming Course in Spring 2022. ",
        contributions: "Led developers for Enemy AI and weapon systems" +
        "• Programmed and enhanced Enemy AI/Decay System through state machines and path finding in response to Beta testing" + 
        "• Developed player inventory UI/UX and state management• Implemented animation, interactable elements, and sound• Collaborated with other developers to find solutions to problems that arose in our application" 
        + "• Pitched and presented a game concept alongside a team of developers",
        projectLink: "https://spiderfoxproductions.itch.io/long-live-decay",
        github: false,
        viewProject: true
    },
    {
        name: "Text Analyzer",
        img: taSlides[0],
        slides: taSlides,
        tagline: "Multi-Threaded Text Analyzer",
        role: "Java Developer",
        timeline: 'Feb 2023 - Apr 2023',
        description: "A multi-threaded implementation of a text analyzer in Java that filters the most common words in large volumes" + 
        " of text to identify key themes and create better context of literature.",
        contributions: "Implemented Parser threads that returned a ConcurrentHashMap with each unique word mapped to its count in the text file" +
        "• Designed Analyzer threads to collect data and identify text themes• Collaborated with other developers to resolve race conditions" + 
        "• Evaluated and improved solution results• Wrote a research paper explaining our implementation and evaluating our solution",
        projectLink: "https://github.com/aribelruiz/MultiThreaded-TextAnalyzer",
        github: true,
        viewProject: false
    },
    {
        name: "Epilapse",
        img: epiSlides[0],
        slides: epiSlides,
        tagline: "Seizure Tracking Application",
        role: "Front-End Developer",
        timeline: 'Feb 2022 - May 2022',
        description: "A mobile and web application allowing users to track and view the correlation between their seizures and related medications." +
        " Epilapse also allows users to share their information with registered caretakers linked to their account.",
        contributions: "Designed and implemented Web/Mobile UI/UX" +
        "• Implemented UI/UX as functional components on both web/mobile" + 
        "• Developed within an Agile environment alongside other developers",
        projectLink: "google.com",
        github: false,
        viewProject: false
    },
    {
        name: "Aribel's Porfolio",
        img: portSlides[0],
        slides: portSlides,
        tagline: "My Personal Web Porfolio",
        role: "Web Developer",
        timeline: 'Jun 2023 - Present',
        description: "A ReactJS web application for displaying my personal skills and projects.",
        contributions: "Designed and developed UI/UX• Implemented UI/UX as functional components" + 
        "• Developed and deployed my personal web application• Ensured responsive UI across multiple devices and browsers",
        projectLink: "https://github.com/aribelruiz/WebPortfolio",
        github: true,
        viewProject: false
    },
    {
        name: "Contact Manager",
        img: cmSlides[0],
        slides: cmSlides,
        tagline: "Contact Manager Web Application",
        role: "Front-End Developer",
        timeline: 'Jan 2022 - Feb 2022',
        description: "A web application allowing registered users to add, store, search, and delete contact information as well as edit their.",
        contributions: "Designed and developed the UI/UX " +
        "• Implemented UI/UX as functional components using HTML/CSS and JavaScript" + 
        "• Assisted in implementation of search and infinite scrolling of contacts" + 
        "• Attended meetings with other developers to implement and present our application",
        projectLink: "https://github.com/aribelruiz/Super-Awesome-Contact-Manager-3000",
        github: true,
        viewProject: false
    },
]