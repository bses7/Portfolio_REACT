import Projects from "../components/projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col  text-center">
          <div className="relative text-3xl lg:text-8xl font-medium lg:font-extrabold ml-[2%] ">
            <span className="absolute before:content-['Portfolio']  before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0 inset-0 top-[20%]"></span>
            <h2 className="secton_title font-extrabold lg:text-3xl text-[var(--main-heading)] mt-[10%] text-capitalize text-center relative z-3">
              My Latest Works
            </h2>
          </div>
          <p className="subtitle mt-10 lg:w-1/2 w-[400px] lg:text-center mx-auto">
            {" "}
            My latest work serves as a testament to my journey of progress and
            achievement. It embodies fresh and innovative ideas, showcases
            meticulous craftsmanship, and stands as a symbol of my unwavering
            commitment to excellence
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};
export default Portfolio;
