import {
  Events,
  Link as ScrollLink,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import Social from "./social";
import { useEffect, useState } from "react";
import { links } from "../data";
import Navmobile from "./Navmobile";
import logo1 from "../images/logo1.svg";
import Darkmode from "../components/Darkmode";
import logo2 from "../images/logo2.svg";

const Header = ({ links }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const logoStyle = {
    "--logo-lg": isDarkMode
      ? 'url("./images/logo2.svg")'
      : 'url("./images/logo1.svg")',
  };
  return (
    <header
      className={`head container mx-auto px-4 lg:px-0 w-full text-black z-10 transition-all duration-300 `}
    >
      <nav className="flex justify-between py-7">
        <ScrollLink className="font-sans" to="/">
          <img
            src="placeholder" // Add a placeholder source for the image
            alt=""
            className="w-[280px] h-[200px] my-[-70px]"
            style={logoStyle} // Apply the style object here
          />
        </ScrollLink>
        <div className="nav_list gap-12 hidden lg:flex mr-[5%] mt-[1%] font-gentium ">
          {links.map((link, index) => (
            <ScrollLink
              to={link.to}
              key={index}
              className={`hover-circle text-xl hover:text-accent transition-all duration-300 cursor-pointer`}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => {
                window.history.pushState(null, "", link.to);
              }}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
        <div className="gap-4 hidden lg:flex mr-[8px]">
          <Social className="" />
        </div>
        <div className="lg:hidden">
          <Navmobile className="z-10" />
        </div>
        <div className="gap-4 hidden lg:flex mr-[8px]">
          <Darkmode />
        </div>
      </nav>
    </header>
  );
};

export default Header;
