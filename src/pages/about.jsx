import about_divs from "../data";
import portrait from "../images/portrait.jpg";
import {
  LightBulbIcon,
  BriefcaseIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto mt-12">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="about-img relative after:content-[''] after:absolute after:left-0 after:top-0 after:origin-center after:rotate-[5deg] after:w-[100%] after:h-[50%] after:bg-[var(--sub-heading)]">
            <img
              src={portrait}
              alt=""
              className="w-full h-1/2 object-cover rounded-[13px] relative z-[3] shadow-3xl lg:mx-0 md:mx-auto "
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold">
                <span className="absolute text-8xl before:content-['About'] before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0"></span>
                <span className="absolute w-[200px] z-10 text-3xl mt-[48px] text-[var(--main-heading)] ml-[9%]">
                  Bishesh Giri
                </span>
              </h2>
              <p className="mb-4 text-accent mt-24">Freelancer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-[var(--sub-heading)]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                veniam est culpa numquam quod, cumque laudantium repellat. Ut,
                illo adipisci laborum culpa tempora distinctio voluptatibus!{" "}
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
                incidunt. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eveniet, veritatis.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row mt-4 w-[85%]">
              {about_divs.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 lg:w-1/3 text-center border rounded-lg bg-[var(--div-clr)] shadow-lg p-4 mb-4 lg:mb-0 hover:bg-[#4b9a8f] hover:text-white transition-all flex flex-col items-center justify-center `}
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-[#4b9a8f] hover:bg-[#3d8070] transition-all text-white py-4 px-4 rounded-md shadow-md w-1/4 text-xl">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
