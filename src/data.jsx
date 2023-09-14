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
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Blogs",
    to: "/blogs",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
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
