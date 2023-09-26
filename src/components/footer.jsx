import { FiLogOut } from "react-icons/fi";
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              return (
                <a
                  href={item.href}
                  key={index}
                  className="text-accent text-base"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={FiLogOut} alt="" />
          </div>
          <p className="text-[var(--sub-heading)]">
            &copy; 2023 Bishesh Giri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
