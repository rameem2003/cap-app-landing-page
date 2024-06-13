import React from "react";
import Flex from "../../common/Flex";
import Container from "../../common/Container";
import CommentCard from "./CommentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "../../common/Image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "text-main h-auto w-auto inline-block absolute top-[-80px] right-0"
      }
      style={{}}
      onClick={onClick}
    >
      <FaArrowRightLong className=" text-main text-2xl  cursor-pointer" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "text-main h-auto w-auto inline-block absolute top-[-80px] right-10"
      }
      style={{}}
      onClick={onClick}
    >
      <FaArrowLeftLong className=" text-main text-2xl  cursor-pointer" />
    </div>
  );
}

const Comments = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className=" mt-[160px] relative">
      <Image
        className="absolute left-20 top-[-50px] w-[150px]"
        src="/shape1.svg"
        alt="shape"
      />
      <Container>
        <div>
          <Flex className="items-center justify-start gap-1">
            <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
          </Flex>

          <div className="mt-5 relative">
            <p className=" absolute w-full left-0 top-[-15px] font-code font-normal xl:text-[40px] text-fadeText">
              they say about us
            </p>
            <p className=" relative z-10 font-darker font-semibold xl:w-[447px] xl:text-[50px] xl:leading-[100%] text-black capitalize">
              they say about us
            </p>
          </div>
          <p></p>
        </div>

        <div className="slider-container mt-[54px] relative">
          <Slider {...settings}>
            <div className="w-auto">
              <CommentCard />
            </div>
            <div className="w-auto">
              <CommentCard />
            </div>
            <div className="w-auto">
              <CommentCard />
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Comments;
