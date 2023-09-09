import { Link } from "react-router-dom";

import Social from "./social";
import { useEffect, useState } from "react";
import { links } from "../data";
import Navmobile from "./Navmobile";
import logo1 from "../images/logo1.svg";
import Darkmode from "../components/Darkmode";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header className="head container mx-auto px-4 lg:px-0 w-full text-black z-10 transition-all duration-300">
      <nav className="flex justify-between py-7">
        <Link className="font-sans" to="/">
          <img src={logo1} alt="" className="w-[280px] h-[200px] my-[-70px]" />
        </Link>
        <div className="nav_list gap-12 hidden lg:flex mr-[5%] mt-[1%] font-gentium ">
          {links.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className="hover-circle text-xl hover:text-accent transition-all duration-300"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="gap-4 hidden lg:flex mr-[8px]">
          <Social className="" />
        </div>
        <div className="lg:hidden">
          <Navmobile />
        </div>
        <div className="gap-4 hidden lg:flex mr-[8px]">
          <Darkmode className="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
