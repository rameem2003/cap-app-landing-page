import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const PageBanner = ({ text }) => {
  return (
    <section className=" relative pt-[159px] pb-[113px] bg-pageBG bg-cover bg-no-repeat">
      <Container>
        <div className=" relative z-20">
          <h1 className=" font-darker font-semibold xl:text-[60px] leading-[100%] text-white">
            {text}
          </h1>
          <Flex className="mt-[30px] items-center gap-3">
            <p className=" font-roboto font-normal xl:text-[14px] leading-[170%] text-[#B3B1B7]">
              <Link to="/">Home</Link>
            </p>
            <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
            <p className=" font-roboto font-normal xl:text-[14px] leading-[170%] text-[#B3B1B7]">
              <Link>{text}</Link>
            </p>
          </Flex>
        </div>
      </Container>
      <p className=" left-10 bottom-[10px] absolute font-code font-normal xl:text-[120px] text-[#CCCCCC]/60">
        {text}
      </p>
    </section>
  );
};

export default PageBanner;
