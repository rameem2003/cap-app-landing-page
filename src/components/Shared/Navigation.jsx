import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import UL from "../common/UL";
import LI from "../common/LI";
import Image from "../common/Image";
import Flex from "./../common/Flex";
import { FiSmartphone } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Popup from "../common/Popup";

const Navigation = () => {
  const [popup, setPopup] = useState(false);
  const [toggle, setToggle] = useState(false);
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
      } fixed z-50  w-full left-0 top-0 block lg:flex items-center justify-between px-0 md:px-[70px] duration-300 ease-in-out`}
    >
      <Link to="/">
        <Image src="/logo.svg" className=" hidden lg:block" alt="logo" />
      </Link>
      <Container>
        {/* <div className="w-full"> */}
        <Flex className=" justify-between items-center w-full">
          <div className=" w-1/2 block lg:hidden">
            <Link>
              <Image src="/logo.svg" alt="logo" />
            </Link>
          </div>

          <UL
            className={`flex absolute lg:static ${
              scrolled ? "top-[70px]" : "top-[90px]"
            } ${
              toggle ? "left-0" : "left-[100%]"
            } bg-[#3831a1] lg:bg-transparent  w-full flex-col lg:flex-row items-center gap-[30px]`}
          >
            <LI className="flex items-center gap-[30px]">
              <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
                Features
              </span>
              <div className=" w-[4px] h-[4px] bg-white rounded-full hidden md:block"></div>
            </LI>
            <LI className="flex items-center gap-[30px]">
              <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
                Download app
              </span>
              <div className=" w-[4px] h-[4px] bg-white rounded-full hidden md:block"></div>
            </LI>
            <LI className="flex items-center gap-[30px]">
              <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
                UI screens
              </span>
              <div className=" w-[4px] h-[4px] bg-white rounded-full hidden md:block"></div>
            </LI>
            <LI className="flex items-center gap-[30px]">
              <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
                Testimonials
              </span>
              <div className=" w-[4px] h-[4px] bg-white rounded-full hidden md:block"></div>
            </LI>
            <LI className="flex items-center gap-[30px]">
              <span className="  font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-white">
                FAQ
              </span>
              <div className=" w-[4px] h-[4px] bg-white rounded-full hidden md:block"></div>
            </LI>

            <LI>
              <button
                onClick={() => setPopup(!popup)}
                className=" px-5 py-1 rounded-full border-[2px] border-main font-roboto font-medium 2xl:text-[16px]  2xl:leading-[170%] text-main"
              >
                Free trial
              </button>
            </LI>
          </UL>

          <div className="w-1/2 items-end block lg:hidden">
            <TiThMenuOutline
              onClick={() => setToggle(!toggle)}
              className=" ml-auto text-2xl text-white cursor-pointer"
            />
          </div>
        </Flex>
        {/* </div> */}
      </Container>

      <Flex className="items-center gap-1 hidden lg:flex">
        <FiSmartphone className="text-[24px] text-main" />
        <p className=" font-roboto font-medium 2xl:text-[19px] text-white">
          +1 742 65 84 122
        </p>
      </Flex>

      <Popup popup={popup} />
    </nav>
  );
};

export default Navigation;
