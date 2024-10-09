import {
  backend,
  carrent,
  creator,
  css,
  enosis,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  rebel_force,
  tailwind,
  threejs,
  tripguide,
  typescript,
  vivasoft,
  web,
  wowgpt,
  employees,
  isp3,
  bustrack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Software Engineer (Frontend)",
    company_name: "Bright Technologies Limited",
    project: "ISP Insights- An ISP solution project",
    icon: rebel_force,
    iconBg: "#ffffff",
    date: "March 2024 - Present",
    points: [
      "Developed an interactive and visually appealing ISP solution website using React and Tailwind CSS to enhance the user experience.",
      "Integrated bKash payment system, enabling seamless online transactions, resulting in a 20% increase in payment efficiency.",
      "Leveraged React Query for efficient state management and real-time data fetching, improving data update performance by 30%.",
      "Implemented Zod validation for robust form validation, ensuring 99% form submission accuracy and reducing user input errors.",
      "Focused on performance optimization, reducing page load time by 15%, improving overall site responsiveness.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Mania",
    description:
      "Web-based platform that allows users to find the latest movies and upcoming movies too",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "public database",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "white-text-gradient",
      },
    ],
    image: wowgpt,
    source_code_link: "https://github.com/zahid-ul-islam/MovieMania-React",
  },
  {
    name: "ISP Solution Frontend",
    description:
      "Web application that admin can fully manage their ISP company in more efficient ways. It has both admin and client portal that means its a role based application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "zod",
        color: "purple-text-gradient",
      },
    ],
    image: isp3,
    source_code_link:
      "https://drive.google.com/file/d/18yt2nMhHXPnlU98GpCwZq13yJLnR7Viz/view?usp=sharing",
  },

  {
    name: "Employee Management System",
    description:
      "Web application that enables company admin to maintain their employee information, leave, notice, HR management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "materialui",
        color: "purple-text-gradient",
      },
    ],
    image: employees,
    source_code_link:
      "https://github.com/zahid-ul-islam/Employee-Management-System",
  },
  {
    name: "Vehicle detection Using YOLOv8",
    description:
      "A vehicle detection system that can detect vehicle from cctv footage, pre-captured video and live footage. I used yolo pre-trained object detection model named YOLOv8.",
    tags: [
      {
        name: "YOLOv8",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "CVZone",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "white-text-gradient",
      },
    ],
    image: bustrack,
    source_code_link: "https://github.com/zahid-ul-islam/Vehicle-Detection",
  },
];

export { experiences, projects, services, technologies, testimonials };
