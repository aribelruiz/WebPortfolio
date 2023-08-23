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
        contributions: "Modularized the previous front-end system• Wrote extensive documentation for future developers" +
        "• Designed and implemented functional UI/UX• Worked alongside backend developers to implement API endpoints and integrate Unsplash API",
        projectLink: "https://github.com/Brainbeats-v4/BrainBeatsv4",
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
        name: "Long Live Decay",
        img: lldSlides[0],
        slides: lldSlides,
        tagline: "Action/Adventure Video Game",
        role: "Full-Stack Developer",
        timeline: 'Jan 2022 - May 2022',
        description: "A single player 2.5D action/adventure game developed on Unity for PC. This game was awarded Best Technical Video Game for UCF's AI for Game Programming Course in Spring 2022. ",
        contributions: "Led developers for Enemy AI and weapon systems" +
        "•  Programmed enemy path finding, enemy decay system, weapons, and enemy response to weapons" + 
        "• Developed UI/UX for player inventory• Pitched and presented a game concept alongside a team of developers",
        projectLink: "https://spiderfoxproductions.itch.io/long-live-decay",
        github: false,
        viewProject: true
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
        name: "Text Analyzer",
        img: taSlides[0],
        slides: taSlides,
        tagline: "Multi-Threaded Text Analyzer",
        role: "Java Developer",
        timeline: 'Feb 2023 - Apr 2023',
        description: "A multi-threaded implementation of a text analyzer in Java that filters the most common words in large volumes" + 
        " of text to identify key themes and create better context of literature.",
        contributions: "Worked alongside other developers to design and implement a multi-threaded solution to a problem" +
        "• Developed separate parser and analyzer threads for an improved implementation" + 
        "• Evaluated and improved solution results• Wrote a research paper explaining our implementation and evaluating our solution",
        projectLink: "https://github.com/aribelruiz/MultiThreaded-TextAnalyzer",
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