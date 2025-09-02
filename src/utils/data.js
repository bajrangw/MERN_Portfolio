import {
  Code2,
  GraduationCap,
  PenTool,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Palette,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter, FiX } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/profile-img.jpg";
import PROJECT_IMG_2 from "../assets/images/PROJECT_IMG_2.png";
import PROJECT_IMG_3 from "../assets/images/PROJECT_IMG_3.png";
import PROJECT_IMG_4 from "../assets/images/PROJECT_IMG_3.png";
import PROJECT_IMG_5 from "../assets/images/PROJECT_IMG_3.png";

// Skill categories
export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-gray-800" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building scalable and efficient server-side applications",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "REST APIs", level: 92, color: "bg-orange-500" },
      { name: "JavaScript (ES6+)", level: 93, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and optimizing data storage solutions",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    description: "Deploying, scaling, and version-controlling applications",
    skills: [
      { name: "Vercel", level: 90, color: "bg-gray-900" },
      { name: "Render", level: 75, color: "bg-purple-600" },
      { name: "Git & GitHub", level: 92, color: "bg-orange-700" },
      { name: "CI/CD Basics", level: 70, color: "bg-blue-400" },
    ],
  },
];


export const TECH_STACK = [
  "Articulate Storyline 360",
  "Articulate Rise 360",
  "HTML5",
  "CSS",
  "JavaScript",
  "Webpack",
  "Vite",
  "Camtasia",
  "Adobe Photoshop",
  "Adobe XD",
];

export const STATS = [
  { number: "100+", label: "Projects Completed in E-learning domain" },
  { number: "13+", label: "Years Experience as Senior developer" },
  { number: "20+", label: "Technologies" },
  { number: "62+", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Platform",
    description: "A full-stack AI Platform that allows users to generate and manage AI-powered creations. Features authentication with Clerk, SQL database integration, and a modern React + Tailwind frontend.",
    image: PROJECT_IMG_2,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "SQL", "Axios", "Clerk"],
    liveUrl: "https://portfolio-01-zeta-three.vercel.app/",
    githubUrl: "https://github.com/bajrangw/portfolio_01",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A full-stack task management application with authentication, database integration, and smooth UI animations. Built using React, Tailwind CSS, Framer Motion, and MongoDB for seamless user experience.",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind CSS", "Framer Motion", "MongoDB"],
    liveUrl: "https://todo-app-mu-green.vercel.app/login",
    githubUrl: "https://github.com/bajrangw/Todo_app",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
    {
    id: 4,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
    {
    id: 5,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021 – Present",
    title: "Senior Developer",
    company: "ansrsource",
    description: [
      "Led and deliver scalable, interactive e-learning solutions for global clients. ",
      "Collaborate with cross-functional teams to align learning experiences with client goals. ",
      "Implement modern tools and frameworks to enhance learner engagement and usability. ",
    ],
    icon: Award,
    color: "bg-cyan-500",
  },
  {
    year: "2018 – 2021",
    title: "Senior E-learning Developer",
    company: "Aptara",
    description: [
      "Led and executed multiple high-impact e-learning projects from concept to deployment. ",
      "Mentored junior developers, improving team productivity and technical expertise. ",
      "Developed innovative, user-centric modules that increased learner satisfaction. ",
    ],
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2017 – 2018",
    title: "Graphics Designer / E-learning Developer",
    company: "Upside Learning Solutions",
    description: [
      "Combined design expertise with e-learning development to create interactive modules. ",
      "Applied instructional design principles to improve learner comprehension and retention. ",
      "Enhanced digital training materials through effective multimedia integration. ",
    ],
    icon: Code2,
    color: "bg-purple-500",
  },
  {
    year: "2015 – 2017",
    title: "Graphics Designer",
    company: "Enthralltech",
    description: [
      "Created engaging graphics and visual assets for corporate learning solutions. ",
      "Collaborated with instructional designers to deliver visually appealing e-learning content. ",
      "Optimized design workflows to meet tight project deadlines without quality compromise. ",
    ],
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2012 – 2014",
    title: "Graphics Designer",
    company: "Kapish Animation",
    description: [
      "Designed illustrations, animations, and creative assets for multimedia projects. ",
      "Contributed to storytelling through compelling graphics and visual layouts. ",
      "Strengthened foundational design skills while supporting multiple creative projects. ",
    ],
    icon: Palette,
    color: "bg-blue-500",
  },
  {
    year: "2009 – 2011",
    title: "Diploma in Animation Engineering (DAE)",
    company: "Arena Animation",
    description: [
      "Completed a comprehensive program in animation, design, and multimedia production. ",
      "Developed strong skills in illustration, animation, and visual storytelling. ",
      "Gained hands-on experience with industry-standard tools while delivering creative projects.",
    ],
    icon: GraduationCap,
    color: "bg-emerald-400",
  },
];


export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Passionate about designing intuitive user experiences",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Love tackling challenges with creative solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always learning new technologies and skills",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/bajrangw",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/bajrang-wavare-बजरंग-वावरे-27294a64",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "X",
    icon: FiX,
    url: "https://x.com/BajrangWavare",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:bajrangwavare@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bajrangwavare@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 860 563 2323",
  },
];
