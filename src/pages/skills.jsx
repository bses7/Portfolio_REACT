import { skill_card, softSkillsData } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="experience-section pl-8 pr-0 pt-16 bg-fdf8f7 relative min-h-screen"
    >
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="section_title text-center">
          <h2 className="font-semibold text-3xl leading-normal text-[var(--skill-heading)] text-capitalize">
            Why Choose Me
          </h2>
          <p className="font-medium text-2xl leading-normal text-accent">
            My Experience Area
          </p>
          <div className="experience-items mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {skill_card.map((item, index) => (
              <div key={index} className="experience-item w-full mb-4">
                <div className="experience-info font-semibold text-[16px] leading-normal flex justify-between items-center text-[var(--skill-heading)] opacity-100">
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
            <div className="flex lg:flex-row flex-col justify-center lg:space-x-48 lg:space-y-0 space-y-12 mt-4 mx-auto">
              {softSkillsData.map((item, index) => (
                <div key={index} className="experience-item w-full mb-4">
                  <div class="container flex  justify-center ">
                    <div class="water shadow-xl flex w-[250px] h-[250px] bg-[#007777] rounded-full relative overflow-hidden before:content-[''] before:absolute before:w-[200%] before:h-[220%] before:-top[50%] before:left-[50%] before:bg-white after:content-[''] after:absolute after:w-[200%] after:h-[220%] after:-top[50%] after:left-[50%] after:bg-white">
                      <div className="relative text-center top-1/3 mx-auto  ">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-md text-white mt-8 ">
                          {item.description}
                        </p>
                        <p className="text-sm text-white mt-2">
                          {item.additionalInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
