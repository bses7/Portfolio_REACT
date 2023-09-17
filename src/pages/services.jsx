import {
  ArrowRightCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="secton_title">Services</h2>
      <span className="section_subtitle">What I Offer !!</span>
      <div className="services_container container grid grid-cols-3 justify-center gap-[1.8rem]">
        <div className="services_content relative border-stone-800 p-[2.5rem]">
          <div>
            <ServerIcon className="block text-[2rem] text-accent  mb-4 " />
            <h3 className="services_title text-3xl mb-4 font-500">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services_button group text-stone-800 text-xl inline-flex items-center gap-[0.25rem] ">
            View More
            <ArrowRightCircleIcon className="w-8 h-8 text-[1rem] duration-300 transition-all group-hover:translate-x-[0.25rem]" />
          </span>
          <div className="service_modal fixed top-0 right-0 left-0 bottom-0 bg-background_alpha z-10 flex justify-center items-center px-0 py-[1rem] opacity-1 visible duration-300 transition-all">
            <div className="services_modal-content w-[500px] relative bg-white p-8 rounded-3xl ">
              <XCircleIcon className="w-8 h-8 absolute top-[1.5rem] text-xl text-accent cursor-pointer" />
              <h3 className="services_modal-title text-center text-2xl font-700 mb-4 ">
                <p className="services_modal-description text-center text-xl px-0 py-[3.5rem] mb-4">
                  Service with more than 3 years of experience. Providing
                  quality work to clients and companies
                </p>
                <ul className="service_modal-services grid grid-rows-4 gap-[3rem] items-center ">
                  <li className="services_modal-service ">
                    <CheckCircleIcon className="w-8 h-8 text-stone-800 text-[1.1rem]" />
                    <p className="services_modal-info text-xl mt-[-7%]">
                      I develop the use interface
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <CheckCircleIcon className="w-8 h-8" />
                    <p className="services_modal-info text-xl mt-[-7%]">
                      I develop the use interface
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <CheckCircleIcon className="w-8 h-8" />
                    <p className="services_modal-info text-xl mt-[-7%]">
                      I develop the use interface
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <CheckCircleIcon className="w-8 h-8" />
                    <p className="services_modal-info text-xl mt-[-7%]">
                      I develop the use interface
                    </p>
                  </li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
