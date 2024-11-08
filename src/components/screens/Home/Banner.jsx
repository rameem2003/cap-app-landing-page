import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const Banner = () => {
  return (
    <section className=" bg-bannerBG bg-cover bg-no-repeat">
      <Container>
        <Flex className="py-[256px] flex-col sm:flex-row">
          <div className=" w-full md:w-1/2">
            <Flex className="gap-[15px]">
              <Flex className="items-center gap-1">
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
              </Flex>

              <p className=" font-roboto font-medium  text-main xl:text-[12px] xl:leading-[170%] tracking-[3px] uppercase">
                trendy application
              </p>
            </Flex>

            <h1 className=" font-darker font-extrabold text-[35px] xl:text-[80px] xl:leading-[90%] text-white capitalize">
              work faster with powerful tools
            </h1>

            <p className=" font-darker font-medium  text-[20px] xl:text-[28px] xl:leading-[110%] text-white mt-[30px]">
              Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco
              eiusmod officia magna ad id.
            </p>

            <button className=" mt-[50px] py-4 px-[35px] rounded-full bg-main font-roboto font-medium xl:text-[16px] xl:leading-[170%] capitalize text-white">
              Learn more
            </button>
          </div>
          <div className=" hidden w-full md:block md:w-1/2 relative">
            <Image
              className="absolute w-[80%] left-[50px]"
              src="/phone.png"
              alt="phone"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
