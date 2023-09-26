import { BlogsCard } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const BlogsSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper lg:h-[300px] h-[400px] mx-auto"
      >
        {BlogsCard.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-32 lg:ml-20 ">
                <div className="lg:w-[328px] lg:h-[328px] lg:mx-0 mx-auto w-64 h-64">
                  <img
                    className="rounded-2xl object-cover "
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="text-2xl lg:mb-8 mb-4 lg:w-full mx-auto w-[300px] lg:mt-8 mt-[-15%] italic font-normal">
                    {item.Blogdesc}
                  </h5>
                  <div>
                    <p className="text-lg text-accent">{item.Author}</p>
                    <p>{item.Blogtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default BlogsSlider;
