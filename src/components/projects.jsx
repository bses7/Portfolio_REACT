import { useEffect, useState } from "react";
import { projectsData } from "../data";
import { projectsNav } from "../data";
import Project from "./project";
import { FaAngleDown } from "react-icons/fa";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const numberOfTabs = 3;

  return (
    <div>
      <nav className="mb-12 mx-w-xl mx-auto mt-4">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-[var(--main-heading)]">
          {projectsNav.slice(0, numberOfTabs).map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4 hover:text-accent font-semibold lg:text-lg text-[var(--main-heading)] text-center `}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
          {projectsNav.length > numberOfTabs && (
            <li className="relative cursor-pointer group">
              <div
                onClick={toggleDropdown}
                className="cursor-pointer capitalize m-4 hover:text-accent font-semibold lg:text-lg text-[var(--main-heading)] text-center flex items-center"
              >
                More Categories
                <FaAngleDown
                  className={`ml-1 transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                />
              </div>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg py-2 z-10">
                  {projectsNav.slice(numberOfTabs).map((item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-gray-700 px-4 py-2 hover:bg-gray-100"
                      onClick={(e) => {
                        handleClick(e, index + numberOfTabs);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
