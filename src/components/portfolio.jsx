// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Button } from "@mui/material";
import ComingSoon from "../assets/coming_soon.png";
import HorrorFolder from "../assets/horror_finder.png";

const projectList = [
  {
    name: "Horror Finder",
    link: "https://github.com/jNighton/Horror-Finder",
    image: HorrorFolder,
  },
  {
    name: "This is my Project",
    link: "https://github.com/007jag",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/007jag",
    image: ComingSoon,
  },

  {
    name: "This is my Project",
    link: "https://github.com/007jag",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/007jag",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/007jag",
    image: ComingSoon,
  },
  {
    name: "This is my Project",
    link: "https://github.com/007jag",
    image: ComingSoon,
  },
];

export default function Projects() {
  return (
    <>
      <div id="projects" className="py-12 bg-secondary">
        <div className="text-center text-[2rem] font-semibold">Projects</div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            1240: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mt-5 p-5 pb-10 md:pb-12 mx-auto"
        >
          {projectList?.map((x) => {
            return (
              <SwiperSlide>
                <div className="bg-white drop-shadow-lg rounded-md overflow-hidden">
                  <div>
                    <img
                      className="md:h-[20rem] lg:h-[15rem] 2xl:h-[25rem] w-full object-cover"
                      src={x.image}
                    />
                  </div>
                  <div className="p-5 flex flex-row items-center justify-between">
                    <div className="font-semibold md:text-[1.25rem]">
                      {x.name}
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => window.open(x.link)}
                      className="capitalize text-primary font-semibold md:text-[1.25rem] bg-primary text-white hover:bg-primary"
                    >
                      Click Me
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}