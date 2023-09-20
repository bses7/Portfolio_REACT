import { useState } from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll"; // Import animateScroll
import { links } from "../data";

const Navmobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  const handleLinkClick = (targetId) => {
    scroll.scrollTo(targetId, {
      duration: 500,
      offset: -70,
      smooth: true,
    });

    setIsOpen(false);
  };

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer right-4 fixed z-10"
      >
        <Bars3CenterLeftIcon className="w-10 h-10 text-[var(--main-heading)]" />
      </div>
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0 z-50"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0 z-50" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300`}
      >
        <div
          className="cursor-pointer absolute top-8 right-8"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="w-8 h-8" />
        </div>
        <div className="overflow-hidden">
          {" "}
          {links.map((item, index) => {
            return (
              <li key={index} className="mb-8">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-xl cursor-pointer capitalize"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </div>
      </motion.ul>
    </nav>
  );
};

export default Navmobile;
