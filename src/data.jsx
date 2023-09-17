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
} from "@heroicons/react/24/outline";

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
    percent: "70%",
  },
  {
    title: "Web Development",
    percent: " 80%",
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
    percent: "70%",
  },
  {
    title: "User Interface (UI) Design",
    percent: "60%",
  },
  {
    title: "Project Management",
    percent: "65%",
  },
];
