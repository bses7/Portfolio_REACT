import {
  ArrowRightCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Services_Card } from "../data";

const Services = () => {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    setToggleState((prevState) => (prevState === index ? null : index));
  };

  return (
    <section className="services section mt-8" id="services">
      <div className="relative text-center text-3xl lg:text-8xl font-medium lg:font-extrabold ml-10">
        <span className="absolute before:content-['Services']  before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0 inset-0 top-[20%]"></span>
        <h2 className="secton_title font-extrabold lg:text-3xl text-[var(--main-heading)] mt-[10%] text-capitalize text-center relative z-3">
          What I Offer !!
        </h2>
      </div>

      <div className="container mx-auto mt-[5%]">
        <div className="flex flex-wrap justify-center lg:gap-[1.8rem] lg:ml-14 ml-12 ">
          {Services_Card.map((item, index) => (
            <div key={index} className="lg:mb-4 w-[80%] lg:w-[30%] mb-2">
              <div className="services_content relative border-stone-800 lg:p-[2.5rem] p-[1.5rem] shadow-xl mt-12 rounded-2xl bg-[var(--div-clr)] ">
                <div>
                  {item.icon}
                  <h3 className="services_title text-3xl mb-4 font-500 text-left text-[var(--main-heading)]">
                    {item.title} <br /> {item.subtitle}
                  </h3>
                </div>
                <span
                  className="services_button group text-[var(--main-heading)] text-xl inline-flex items-center gap-[0.25rem] cursor-pointer justify-start"
                  onClick={() => toggleTab(index)}
                >
                  View More
                  <ArrowRightCircleIcon className="w-8 h-8 text-[1rem] duration-300 transition-all group-hover:translate-x-[0.25rem] text-[var(--main-heading)]" />
                </span>
                <div
                  className={`services_modal ${
                    toggleState === index ? "active-modal" : ""
                  } fixed top-0 right-0 left-0 bottom-0 bg-background_alpha z-10 flex justify-center items-center px-0 py-[1rem] opacity-0 invisible duration-300 transition-all`}
                >
                  <div className="services_modal-content lg:w-[40%] relative bg-white p-8 rounded-xl w-[80%]">
                    <XCircleIcon
                      className="w-8 h-8 absolute lg:top-[1.5rem] text-xl text-accent cursor-pointer lg:right-8"
                      onClick={() => setToggleState(null)}
                    />
                    <h3 className="services_modal-title text-center text-2xl font-700 lg:mb-4 mt-[10%] ] ">
                      {" "}
                      {item.title} {item.subtitle}
                      <p className="services_modal-description text-center text-xl px-0 lg:py-[3.5rem] mb-4 py-[1.5rem]">
                        {item.desc}
                      </p>
                      <ul className="service_modal-services grid items-center grid-rows-4 gap-8">
                        <li className="services_modal-service flex items-center">
                          <CheckCircleIcon className="w-8 h-8 text-stone-800 text-xl mr-2" />
                          <p className="services_modal-info text-xl">
                            {item.offer1}
                          </p>
                        </li>
                        <li className="services_modal-service flex items-center">
                          <CheckCircleIcon className="w-8 h-8 text-stone-800 text-xl mr-2" />
                          <p className="services_modal-info text-xl">
                            {item.offer2}
                          </p>
                        </li>
                        <li className="services_modal-service flex items-center">
                          <CheckCircleIcon className="w-8 h-8 text-stone-800 text-xl mr-2" />
                          <p className="services_modal-info text-xl">
                            {item.offer3}
                          </p>
                        </li>
                        <li className="services_modal-service flex items-center">
                          <CheckCircleIcon className="w-8 h-8 text-stone-800 text-xl mr-2" />
                          <p className="services_modal-info text-xl">
                            {item.offer4}
                          </p>
                        </li>
                      </ul>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
