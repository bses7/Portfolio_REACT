import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Social from "./social";
import { links } from "../data";
import Navmobile from "./Navmobile";
import logo1 from "../images/logo1.svg";
import Darkmode from "../components/Darkmode";
import logo2 from "../images/logo2.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = ({ links }) => {
  const [theme, setTheme] = useState("light-theme");
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    scroll.scrollTo(to, {
      smooth: true,
      duration: 500,
      offset: -70,
    });

    navigate(to);
  };

  return (
    <header
      className={`head container mx-auto px-4 lg:px-0 w-full text-black z-10 transition-all duration-300 `}
    >
      <nav className="flex justify-between py-7">
        <RouterLink to="/" className="font-sans">
          <img
            src={theme === "light-theme" ? logo1 : logo2}
            alt=""
            className="lg:w-[280px] lg:h-[200px] lg:my-[-70px] my-[-60px] w-[150px] h-[150px]"
          />
        </RouterLink>
        <div className="nav_list gap-12 hidden lg:flex mr-[5%] mt-[1%] font-gentium ">
          {links.map((link, index) => (
            <ScrollLink
              to={link.to}
              key={index}
              className={`hover-circle text-xl hover:text-accent transition-all duration-300 cursor-pointer`}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleLinkClick(link.to)}
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
          <Darkmode theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
