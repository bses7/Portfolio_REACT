import { useEffect, useState } from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import port from "../images/port.jpeg";
const Home = () => {
  const [inuse, setInuse] = useState(0);
  const field = ["Designer", "Freelancer", "Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setInuse((prevInuse) => (prevInuse + 1) % field.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="home flex justify-center items-center overflow-hidden leading-normal lg:my-0 min-h-screen "
    >
      <div className="container ml-[12%] lg:mt-[-5%] ">
        <div className="flex flex-col-reverse lg:flex-row md:flex-row">
          <div className="w-1/2 md:w-1/2">
            <div className="home-content mb-10">
              <div className="home-title">
                <h2 className="mb-4 mt-[10px] leading-loose">Hey, I'm</h2>
                <h1 className="text-10xl font-bold ml-[8px] lg:mt-[12px] mt-[8px] leading-none">
                  Bishesh
                </h1>
              </div>
              <div className="text-wrapper">
                <p className="creative text-2xl font-bold mt-[2px] leading-tight ">
                  Creative{" "}
                  <span className="items text-10xl opacity-0 ">
                    {" "}
                    {field[inuse]}
                  </span>
                </p>
              </div>
              <div className="link flex justify-start items-center text-lg font-bold ">
                <div class="flex flex-col ml-[50%] md:flex-row justify-center lg:gap-2 gap-0 md:ml-[10%] mt-[10px]">
                  <button class="flex btn-1 w-full md:w-auto px-6 py-3 bg-black text-white text-lg hover:bg-gray-800 rounded-lg mb-2 md:mb-0 md:mr-2 transition-all duration-400">
                    Download CV
                  </button>
                  <div class="w-full h-4 md:w-4 md:h-auto"></div>
                  <button class="flex btn-2 w-full md:w-auto px-6 py-3 bg-gray-300 text-black text-lg hover:bg-gray-400 rounded-lg transition-all duration-400">
                    Contact
                    <RocketLaunchIcon className="w-8 h-8 ml-[10%] " />
                  </button>
                </div>
                <div className="scroll lg:relative absolute animate-slide-up-delayed lg:ml-[-27%] mb-24 ml-16 ">
                  <a href="#">
                    <span className="absolute mb-[-80px] w-30 h-50 ml-[80px] border-2 border-black rounded-full hover:border-[#fff] transition-all duration-400"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="circle relative w-[450px] h-[450px] bg-[#999] rounded-full overflow-hidden">
              <div className="content absolute inset-30 border-6 border-black z-3 rounded-full flex items-center overflow-hidden flex-col">
                <img
                  src={port}
                  alt=""
                  className="absolute top-0 left-0 w-full object-cover h-full bg-cover"
                />
                <h2 className="relative text-center text-lg font-semibold uppercase py-10 leading-tight">
                  Bishesh
                  <br /> <span></span> "A Canvas of Infinite Imagination"
                </h2>
                <a
                  href="#contact"
                  className="flex relative bg-[#222] text-white py-2 px-4 rounded-lg text-base font-semibold uppercase"
                >
                  Hire Me
                  <BriefcaseIcon className="w-6 h-6 ml-[5px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
