import bbImg from "../../Images/Projects/BrainBeatsHome.png";
import epiImg from "../../Images/Projects/EpilapseHome.png";
import lldImg from "../../Images/Projects/LLDHome.png";
import contactImg from "../../Images/Projects/contactManager.png";
import mtImg from "../../Images/Projects/mtJava.png";
import portfolioImg from "../../Images/Projects/webPortfolio.png";



export const ProjectList = [
    {
        name: "Brain Beats V4",
        img: bbImg,
        tagline: "Music Sharing Platform",
        role: "Front-End Developer",
        description: "Version 4 of a music sharing web app built for converting brain activity" +
        " into Musical Instrument Digital Interface files (MIDI).",
        contributions: "Modularized the previous front-end system• Wrote extensive documentation for future developers" +
        "• Worked alongside backend developers to implement functional front-end components" + 
        "• Designed and implemented UI/UX",
        projectLink: "https://github.com/Brainbeats-v4/BrainBeatsv4",
        github: true,
        viewProject: false
    },
    {
        name: "Epilapse",
        img: epiImg,
        tagline: "Seizure Tracking Application",
        role: "Front-End Developer",
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
        img: lldImg,
        tagline: "Action/Adventure Video Game",
        role: "Full-Stack Developer",
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
        img: portfolioImg,
        tagline: "My Personal Web Porfolio",
        role: "Web Developer",
        description: "A ReactJS web application for displaying my personal skills and projects.",
        contributions: "Designed and developed UI/UX" +
        "• Implemented UI/UX as functional components" + 
        "• Developed and deployed my personal web application",
        projectLink: "https://github.com/aribelruiz/WebPortfolio",
        github: true,
        viewProject: false
    },
    {
        name: "Text Analyzer",
        img: mtImg,
        tagline: "Multi-Threaded Text Analyzer",
        role: "Java Developer",
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
        img: contactImg,
        tagline: "Contact Manager Web Application",
        role: "Front-End Developer",
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