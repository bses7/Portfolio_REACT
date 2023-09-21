import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import {
  LightBulbIcon,
  BriefcaseIcon,
  ChatBubbleLeftEllipsisIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

import Project1 from "./images/Project1.png";
import Project2 from "./images/Project2.jpg";
import Project3 from "./images/Project3.jpg";
import Project4 from "./images/Project4.jpg";
import Project5 from "./images/Project5.jpg";
import Project6 from "./images/Project6.jpg";

export const links = [
  {
    label: "Home",
    to: "home",
  },
  {
    label: "About",
    to: "about",
  },
  {
    label: "Skills",
    to: "skills",
  },
  {
    label: "Blogs",
    to: "blogs",
  },
  {
    label: "Portfolio",
    to: "portfolio",
  },
];

export const social = [
  {
    icon: <FiInstagram className="w-5 h-5 social" />,
    href: "",
  },
  {
    icon: <FiTwitter className="w-5 h-5 social" />,
    href: "",
  },
  {
    icon: <FiGithub className="w-5 h-5 social" />,
    href: "",
  },
];

const about_divs = [
  {
    title: "Experience",
    icon: <LightBulbIcon className="w-16 h-16 text-[var(--sc-clr)] mb-2" />,
    text: "1+ years",
  },
  {
    title: "Completed",
    icon: <BriefcaseIcon className="w-16 h-16 text-[var(--circ-clr)] mb-2" />,
    text: "10+",
  },
  {
    title: "Support",
    icon: (
      <ChatBubbleLeftEllipsisIcon className="w-16 h-16 text-[var(--sc-clr)] mb-2" />
    ),
    text: "24/7",
  },
];

export default about_divs;

export const skill_card = [
  {
    title: "Python Programming",
    percent: "85%",
  },
  {
    title: "Data Structures and Algorithms",
    percent: "80%",
  },
  {
    title: "Web Development",
    percent: " 78%",
  },
  {
    title: "Data Analysis",
    percent: "75%",
  },
  {
    title: "Data Visualization",
    percent: "70%",
  },
  {
    title: "React",
    percent: "80%",
  },
  {
    title: "Front-End Development",
    percent: "75%",
  },
  {
    title: "Database Management",
    percent: "50%",
  },
  {
    title: "User Interface (UI) Design",
    percent: "60%",
  },
  {
    title: "Project Management",
    percent: "77%",
  },
];

export const Services_Card = [
  {
    title: "Creative Product",
    subtitle: "Designer",
    desc: "Service with more than 1 years of experience. Providing quality work to clients and companies",
    offer1: "UI/UX design",
    offer2: "Engaging user interfaces",
    offer3: "Customized visual elements",
    offer4: "Branding & logo design",
    icon: (
      <ComputerDesktopIcon className="block lg:text-[2rem] text-[var(--circ-clr)] mb-4 w-12 h-12 mt-[50%] md:text-[1.5rem]" />
    ),
  },
  {
    title: "Web Development",
    subtitle: "Developer",
    desc: "Experienced web developer with expertise in modern web technologies",
    offer1: "Responsive websites",
    offer2: "Front-end development",
    offer3: "Back-end solutions",
    offer4: "Maintenance & support",
    icon: (
      <CodeBracketIcon className="block lg:text-[2rem] text-[var(--circ-clr)] mb-4 w-12 h-12 mt-[50%] md:text-[1.5rem]" />
    ),
  },
  {
    title: "Python Programming",
    subtitle: "Developer",
    desc: "Experienced Python developer offering a wide range of programming services",
    offer1: "Clean & efficient Python code",
    offer2: "Education And Training",
    offer3: "Automation & scripting",
    offer4: "Data analysis & visualization",
    icon: (
      <CommandLineIcon className="block lg:text-[2rem] text-[var(--circ-clr)] mb-4 w-12 h-12 mt-[50%] md:text-[1.5rem]" />
    ),
  },
];

export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Hospital Management System",
    category: "Python",
  },
  {
    id: "2",
    image: Project2,
    name: "Analysing Netflix Movies",
    category: "Data Analysis",
  },
  {
    id: "3",
    image: Project3,
    name: "Smart Shopping Trolley",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "Configuring Small LAN (Cisco)",
    category: "Networking",
  },
  {
    id: "5",
    image: Project5,
    name: "project name 5",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "web development",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "Network",
  },
  {
    name: "branding",
  },
];
