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
      <h2 className="secton_title font-semibold text-3xl leading-normal text-[#15295f] text-capitalize">
        Services
      </h2>
      <span className="section_subtitle font-medium text-2xl leading-normal text-accent">
        What I Offer !!
      </span>
      <div className="container grid grid-cols-3 justify-center gap-[1.2rem] ml-20">
        {Services_Card.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="services_content relative border-stone-800 p-[2.5rem] shadow-xl rounded-2xl">
              <div>
                {item.icon}
                <h3 className="services_title text-3xl mb-4 font-500 text-left">
                  {item.title} <br /> {item.subtitle}
                </h3>
              </div>
              <span
                className="services_button group text-stone-800 text-xl inline-flex items-center gap-[0.25rem] cursor-pointer justify-start"
                onClick={() => toggleTab(index)}
              >
                View More
                <ArrowRightCircleIcon className="w-8 h-8 text-[1rem] duration-300 transition-all group-hover:translate-x-[0.25rem]" />
              </span>
              <div
                className={`services_modal ${
                  toggleState === index ? "active-modal" : ""
                } fixed top-0 right-0 left-0 bottom-0 bg-background_alpha z-10 flex justify-center items-center px-0 py-[1rem] opacity-0 invisible duration-300 transition-all`}
              >
                <div className="services_modal-content w-[40%] relative bg-white p-8 rounded-xl ">
                  <XCircleIcon
                    className="w-8 h-8 absolute top-[1.5rem] text-xl text-accent cursor-pointer"
                    onClick={() => setToggleState(null)}
                  />
                  <h3 className="services_modal-title text-center text-2xl font-700 mb-4">
                    {" "}
                    {item.title} <br /> {item.subtitle}
                    <p className="services_modal-description text-center text-xl px-0 py-[3.5rem] mb-4">
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
    </section>
  );
};

export default Services;
