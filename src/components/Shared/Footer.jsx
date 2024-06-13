import React from "react";
import Container from "../common/Container";
import UL from "../common/UL";
import LI from "../common/LI";
import Flex from "../common/Flex";
import Image from "../common/Image";

const Footer = () => {
  return (
    <footer className="pt-[393px] bg-footerBG bg-cover bg-no-repeat mt-[274px] ">
      <Container>
        <div className=" relative">
          <Flex className="p-10 rounded-[20px] bg-white w-full h-[350px] absolute left-0 top-[-500px]">
            <div className="w-4/12 relative">
              <Image className="absolute left-0 bottom-0" src="/mail.svg" />
            </div>
            <div className="w-8/12">
              <div>
                <Flex className="gap-[15px]">
                  <Flex className="items-center gap-1">
                    <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                    <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                  </Flex>

                  <p className=" font-roboto font-medium  text-main xl:text-[12px] xl:leading-[170%] tracking-[3px] uppercase">
                    Newsletter
                  </p>
                </Flex>
                <h1 className=" capitalize font-darker font-semibold xl:text-[36px] leading-[100%] text-black">
                  Be aware of new features
                </h1>

                <p className=" font-roboto font-normal xl:text-[16px] leading-[170%] text-textoff mt-[14px] xl:w-[438px]">
                  Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum
                  tempor duis do ullamco eiusmod officia magna ad id.
                </p>

                <Flex className="mt-[26px] gap-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    className=" w-[80%] border-[1px] border-[#E6EBFC] rounded-full py-[17px] px-[30px] outline-none"
                  />

                  <button className=" w-[20%] py-4 px-[35px] rounded-full bg-main font-roboto font-medium xl:text-[16px] text-white">
                    Subscribe
                  </button>
                </Flex>
              </div>
            </div>
          </Flex>
        </div>

        <UL className="flex items-center gap-[30px] justify-center">
          <LI className="flex items-center gap-[30px]">
            <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
              FEATURES
            </span>
            <div className=" w-[4px] h-[4px] bg-white rounded-full"></div>
          </LI>
          <LI className="flex items-center gap-[30px]">
            <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
              Download app
            </span>
            <div className=" w-[4px] h-[4px] bg-white rounded-full"></div>
          </LI>
          <LI className="flex items-center gap-[30px]">
            <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
              UI screens
            </span>
            <div className=" w-[4px] h-[4px] bg-white rounded-full"></div>
          </LI>
          <LI className="flex items-center gap-[30px]">
            <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
              Testimonials
            </span>
            <div className=" w-[4px] h-[4px] bg-white rounded-full"></div>
          </LI>
          <LI className="flex items-center gap-[30px]">
            <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
              FAQ
            </span>
            <div className=" w-[4px] h-[4px] bg-white rounded-full"></div>
          </LI>

          <LI>
            <button className=" px-5 py-1 rounded-full border-[2px] border-main font-roboto font-medium 2xl:text-[16px]  2xl:leading-[170%] text-main">
              Free trial
            </button>
          </LI>
        </UL>
      </Container>

      <div className=" h-[1px] bg-white/20 w-full mt-[47px]"></div>

      <p className=" font-roboto font-normal xl:text-[14px] leading-[170%] text-[#b3b1b7] text-center py-[23px]">
        © All rights reserved. Upland 2020
      </p>
    </footer>
  );
};

export default Footer;
