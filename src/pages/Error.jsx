import React from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import PageBanner from "../components/common/PageBanner";
import { IoSearch } from "react-icons/io5";

const Error = () => {
  return (
    <section>
      <PageBanner text="Opps" />
      <Container>
        <Flex className="mt-[58px] gap-[75px] items-center">
          <div className="w-1/2">
            <p className=" font-darker font-bold text-[80px] text-black">404</p>
            <p className=" font-darker font-semibold text-[50px] text-black">
              Page not found
            </p>

            <p className=" font-darker font-medium text-[28px] text-textoff xl:w-[458px]">
              It looks like nothing was found at this location. Maybe try a
              search?
            </p>

            <div className=" relative mt-5">
              <input
                type="text"
                placeholder="Search "
                className=" w-full py-[18px] px-[30px] rounded-[50px] border-[1px] border-[#B3B1B7]"
              />

              <IoSearch className=" text-[#B3B1B7] text-[18px] absolute right-2 top-[50%] translate-y-[-50%]" />
            </div>
          </div>
          <div className="w-1/2">
            <Image src="/error.svg" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Error;
