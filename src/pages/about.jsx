import about_divs from "../data";
import portrait from "../images/portrait.jpg";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto mt-12">
        <div className="flex flex-col xl:flex-row gap-24 ">
          <div className="about-img relative after:content-[''] after:absolute after:left-0 after:top-0 after:origin-center after:rotate-[5deg] lg:after:w-[75%] lg:after:h-[60%] after:w-[60%] after:h-[100%] lg:after:ml-auto after:ml-24 after:bg-[var(--sub-heading)]">
            <img
              src={portrait}
              alt=""
              className="lg:w-[75%] lg:h-[60%] h-[10%] w-[60%] mx-auto object-cover rounded-[13px] relative z-[3] shadow-3xl lg:mx-0 md:mx-auto "
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-[-14%] ">
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold">
                <span className="absolute text-8xl before:content-['About'] before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0"></span>
                <span className="lg:absolute relative w-[200px] z-10 text-3xl mt-[48px] text-[var(--main-heading)] lg:ml-[14%]">
                  Bishesh Giri
                </span>
              </h2>
              <p className="mb-4 text-accent lg:mt-24 mt-4 ">Freelancer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-[var(--sub-heading)] lg:w-full w-[85%] mx-auto">
                I'm a student at Sunway College with a strong passion for tech.
                I've cultivated my proficiency in Python, Web development,
                React, and Data analysis. Currently, I'm also working as a
                freelancer, applying my skills to real-world projects. <br />{" "}
                <br />I explore AI and cloud tech, staying updated with trends.
                With problem-solving expertise, I aim to impact tech
                innovatively.
                <br />
                <br />
                With a keen eye for problem-solving and a dedication to
                delivering high-quality solutions, I am enthusiastic about
                contributing to innovative projects and making a meaningful
                impact in the tech industry.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row mt-4 lg:w-[100%] w-[85%] gap-8 text-[var(--main-heading)]">
              {about_divs.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 group lg:w-1/3 cursor-pointer text-center rounded-lg bg-[var(--div-clr)] shadow-lg p-4 mb-4 lg:mb-0 hover:bg-[#4b9a8f] hover:text-white transition-all flex flex-col items-center justify-center `}
                >
                  <span className="group-hover:invisible">{item.icon}</span>
                  <h3 className="text-lg font-semibold ">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 mb-8 bg-[#4b9a8f] hover:bg-[#3d8070] transition-all text-white py-4 px-4 rounded-md shadow-md lg:w-1/3 text-xl">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
