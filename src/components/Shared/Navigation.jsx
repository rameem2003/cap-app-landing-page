import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import UL from "../common/UL";
import LI from "../common/LI";
import Image from "../common/Image";
import Flex from "./../common/Flex";
import { FiSmartphone } from "react-icons/fi";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);

    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${
        scrolled ? "bg-[#3831a1] py-6" : "bg-transparent py-[50px]"
      } fixed z-50 w-full left-0 top-0 flex items-center justify-between px-[70px] duration-300 ease-in-out`}
    >
      <Image src="/logo.svg" alt="logo" />
      <Container>
        <UL className="flex items-center gap-[30px]">
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

      <Flex className="items-center gap-1">
        <FiSmartphone className="text-[24px] text-main" />
        <p className=" font-roboto font-medium 2xl:text-[19px] text-white">
          +1 742 65 84 122
        </p>
      </Flex>
    </nav>
  );
};

export default Navigation;
