import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const Trail = () => {
  return (
    <section className=" bg-TrailBG py-[160px] h-[1064px] mt-5 relative">
      <Image
        className="absolute right-[100px] top-[150px] w-[150px]"
        src="/shape1.svg"
        alt="shape"
      />
      <Container>
        <div className=" w-full bg-CTABG bg-cover bg-no-repeat py-[153px]">
          <div className=" text-center">
            <Flex className="gap-[15px] justify-center">
              <Flex className="items-center gap-1">
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
              </Flex>

              <p className=" font-roboto font-medium  text-main xl:text-[12px] xl:leading-[170%] tracking-[3px] uppercase">
                trendy application
              </p>
            </Flex>

            <h1 className=" mx-auto font-darker font-extrabold xl:text-[80px] xl:leading-[90%] text-white xl:w-[560px] capitalize">
              Get a free trial for <span className=" text-main">30</span>
              days
            </h1>

            <button className=" py-4 px-[35px] rounded-full bg-main font-roboto font-normal xl:text-[16px] xl:leading-[170%] text-white capitalize mt-10">
              get a free trial
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trail;
