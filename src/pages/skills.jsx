import { skill_card } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="experience-section pl-8 pr-0 pt-16 bg-fdf8f7 relative"
    >
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="section_title text-center">
          <h2 className="font-semibold text-3xl leading-normal text-[#15295f] text-capitalize">
            Why Choose Me
          </h2>
          <p className="font-medium text-2xl leading-normal text-accent">
            My Experience Area
          </p>
          <div className="experience-items mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {skill_card.map((item, index) => (
              <div key={index} className="experience-item w-full mb-4">
                <div className="experience-info font-semibold text-[16px] leading-normal flex justify-between items-center text-[#152957] opacity-100">
                  <p className="ml-4">{item.title}</p>
                  <p>{item.percent}</p>
                </div>
                <div className="progress-line mt-2 h-4 w-full bg-[#cdcdcd] rounded-full relative">
                  <span
                    className="h-full bg-[#007777] rounded-full block animate-progress"
                    style={{ width: item.percent }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
