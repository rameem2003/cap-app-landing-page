import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "./../../common/Image";
import UL from "./../../common/UL";
import LI from "./../../common/LI";
import { MdCheckCircleOutline } from "react-icons/md";

const Features = () => {
  return (
    <section className="mt-[160px] ">
      <Container>
        <Flex className="gap-[60px] relative flex-col md:flex-row items-center">
          <Image
            className="hidden xl:block absolute right-[-50px] top-0 w-[150px]"
            src="/shape1.svg"
            alt="shape"
          />
          <Image
            className="hidden xl:block absolute left-[-150px] bottom-[-50px] w-[150px]"
            src="/shape1.svg"
            alt="shape"
          />
          <div className=" w-full md:w-1/2">
            <Image src="/featurer.svg" />
          </div>
          <div className=" w-full md:w-1/2">
            <div>
              <Flex className="items-center justify-start gap-1">
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
              </Flex>

              <div className="mt-5 relative">
                <p className=" absolute w-full left-0 top-[-1px] xl:top-[-15px] font-code font-normal text-[20px] xl:text-[40px] text-fadeText">
                  The most popular application 2021
                </p>
                <p className=" relative z-10 font-darker font-semibold xl:w-[447px] text-[30px] xl:text-[50px] xl:leading-[100%] text-black capitalize">
                  The most popular application 2021
                </p>
              </div>
              <p></p>
            </div>

            <p className=" font-darker font-medium text-[22px] xl:text-[28px] xl:leading-[110%] text-fadeText mt-[30px] xl:w-[457px]">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
              dolore ipsum.
            </p>

            <UL className="mt-[33px]">
              <LI className="flex gap-5 mb-5">
                <MdCheckCircleOutline className="text-main text-[20px]" />

                <p className=" font-roboto font-normal text-[12px] xl:text-[16px] text-textoff xl:w-[417px]">
                  Elit mollit aliqua quis ad sint nulla Lorem commodo
                  reprehenderit.
                </p>
              </LI>
              <LI className="flex gap-5 mb-5">
                <MdCheckCircleOutline className="text-main text-[20px]" />

                <p className=" font-roboto font-normal text-[12px] xl:text-[16px] text-textoff xl:w-[417px]">
                  Tempor consectetur aliqua aute veniam occaecat eu do esse
                  adipisicing ut.
                </p>
              </LI>
              <LI className="flex gap-5 mb-5">
                <MdCheckCircleOutline className="text-main text-[20px]" />

                <p className=" font-roboto font-normal text-[12px] xl:text-[16px] text-textoff xl:w-[417px]">
                  Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                  incididunt dolore ipsum tempor duis do ullamco eiusmod officia
                  magna ad id.
                </p>
              </LI>
            </UL>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Features;
