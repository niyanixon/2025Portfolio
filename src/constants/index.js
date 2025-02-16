import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, Javascript, Tailwind, Typescript, Html/Css, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Growing up as one of five kids in a lively household, I developed teamwork, resilience, and adaptability– skills I carried into my construction career.  I built sheds around the community for people who needed the extra space, like the local church. Whether addressing incorrect measurements or adjusting for unexpected weather, I remained calm and found creative ways to avoid delays, rework timelines, and keep projects on track. When I reflected on my own strengths and discovered coding, it felt natural to me. I was reminded about my mother’s tech career, and how I could also create solutions that make a difference. This inspiration led me to combine my love for problem-solving with creativity, and I’m now excited to bring this mindset and collaborate alongside your engineering team.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Resilient Coders",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB", "Express", "Typescript"],
  },
  {
    year: "2023 - present",
    role: "Web Developer",
    company: "Freelance",
    description: `Designed and developed user interfaces for web applications using Node.js and React. Integrated frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Node.js", "MongoDB", "React.js", "Javascript", "Express"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website tailored to target the New York City school system, showcasing products and services for educational institutions.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Love At First Bite",
    image: project2,
    description:
      "An application designed to help users discover restaurants tailored to their preferences. By answering three simple questions: price range, food category, and dining style users receive personalized restaurant recommendations based on their chosen city.",
    technologies: ["EJS", "CSS", "Javascript", "MongoDB"],
  },
  {
    title: "Kinfolx",
    image: project3,
    description:
      "A platform enabling users to share reviews of companies excelling in Diversity, Equity, and Inclusion initiatives, fostering transparency and promoting exemplary practices in workplace.",
    technologies: ["React", "Tailwind", "Javascript", "MongoDB" , "Express"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["EJS", "CSS", "Node.js", "Express", "MongoDB"],
  },
];

export const CONTACT = {
  location: "Philadelphia",
  email: "niyabnixon@gmail.com",
};
