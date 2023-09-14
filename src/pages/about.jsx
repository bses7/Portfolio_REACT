import portrait from "../images/portrait.jpg";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto mt-12">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="about-img relative after:content-[''] after:absolute after:left-0 after:top-0 after:origin-center after:rotate-[5deg] after:w-[100%] after:h-[50%] after:bg-[#666]">
            <img
              src={portrait}
              alt=""
              className="w-full h-1/2 object-cover rounded-[13px] relative z-[3] shadow-3xl lg:mx-0 md:mx-auto "
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div class="relative">
              <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                <span class="relative text-8xl before:content-['About'] before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0"></span>
                <span class="relative w-[200px] z-10 text-3xl mt-[48px] text-[#444] mt-[-10%]">
                  Bishesh Giri
                </span>
              </h2>
              <p className="mb-4 text-accent mt-24">Freelancer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                veniam est culpa numquam quod, cumque laudantium repellat. Ut,
                illo adipisci laborum culpa tempora distinctio voluptatibus!{" "}
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
                incidunt. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eveniet, veritatis.
              </p>
            </div>
            <button class="bg-[#4b9a8f]  hover:bg-[#3d8070] transition-all text-white py-2 px-4 rounded-md shadow-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
