import BlogsSlider from "../components/blogs_slider";

const Blogs = () => {
  return (
    <section className="section lg:mt-12 mt-4" id="blogs">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="relative text-3xl lg:text-8xl font-medium lg:font-extrabold  ">
            <span className="absolute before:content-['Blogs'] before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0 inset-0 top-[20%]"></span>
            <h2 className="secton_title font-extrabold lg:text-3xl text-[var(--main-heading)] lg:mt-[25%] mt-8 ml-4 text-capitalize text-center relative z-3">
              My Latest Blogs
            </h2>
          </div>
          <p className="lg:mt-20 mt-10 w-[450px] mx-auto mb-12">
            Explore my latest blog posts for insightful articles, helpful tips,
            and engaging stories. Discover a wealth of knowledge and inspiration
            in diverse range of topics. Stay informed and inspired with my blogs
          </p>
        </div>
        <BlogsSlider />
      </div>
    </section>
  );
};
export default Blogs;
