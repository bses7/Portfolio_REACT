import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Social from "./social";
import { useEffect, useState } from "react";
import { links } from "../data";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header className="container mx-auto px-4 lg:px-0">
      <nav className="flex justify-between py-7">
        <Link className="font-sans" to="/">
          Bses.{" "}
        </Link>

        <div className="gap-4 hidden lg:flex">
          {links.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className="hover-circle text-xl hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="gap-4 hidden lg:flex">
          <Social />
        </div>
      </nav>
    </header>
  );
};

export default Header;
