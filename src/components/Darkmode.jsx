import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "../images/Sun.svg";
import { ReactComponent as Moon } from "../images/Moon.svg";

const Darkmode = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <section className="lg: flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
      <a
        href="#"
        className={`btn relative bg-[#ebe6ff] text-white transition-colors duration-300 ease-in-out`}
        onClick={() => toggleTheme()}
      >
        <div
          className={`slider w-14 h-8 rounded-full overflow-hidden relative transition-transform duration-300 ease-in-out ${
            theme === "dark-theme" ? "bg-[#7ac8c1]" : "bg-[#7ac8c1]"
          }`}
        >
          <div
            className={`slider-icon absolute w-8 h-8 ${
              theme === "dark-theme" ? "right-0" : "left-0"
            } top-0 bottom-0 m-auto bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out`}
          >
            {theme === "dark-theme" ? (
              <Sun className="text-gray-400 " />
            ) : (
              <Moon className="text-gray-400 " />
            )}
          </div>
        </div>
      </a>
    </section>
  );
};

export default Darkmode;
