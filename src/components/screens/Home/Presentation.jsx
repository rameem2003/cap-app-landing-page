import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Presentation = () => {
  return (
    <section className="mt-[90px] bg-PresentationBG bg-cover bg-no-repeat">
      <Container>
        <div className="pt-[375px]">
          <Flex className="items-center justify-center gap-1">
            <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
          </Flex>

          <div className="mt-5 relative">
            <p className=" absolute w-full text-center left-[50%] top-[-1px] xl:top-[-15px] translate-x-[-50%] font-code font-normal text-[20px] 2xl:text-[40px] text-fadeText">
              watch our UI presentation
            </p>
            <p className=" relative z-10 font-darker font-semibold 2xl:text-[50px] text-[20px] 2xl:leading-[100%] text-white text-center capitalize">
              watch our UI presentation
            </p>
          </div>
          <p></p>
        </div>

        <div className="mt-[50px] relative">
          {/* <Image src="/slide.png" /> */}

          <Flex className=" justify-between">
            <button className="swiper-button-prev">
              <FaArrowLeftLong className=" text-white" />
            </button>
            <button className="swiper-button-next">
              <FaArrowRightLong className=" text-white" />
            </button>
          </Flex>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            showsPagination={false}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={false}
            initialSlide={5}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="xl:w-auto text-center bg-none w-[40%]">
              <Image src="slide1.png" className="mx-auto" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Presentation;
