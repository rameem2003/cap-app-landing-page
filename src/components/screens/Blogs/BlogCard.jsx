import React from "react";
import { FaShareAlt } from "react-icons/fa";
import Flex from "../../common/Flex";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = () => {
  return (
    <div className=" w-full rounded-[20px] overflow-hidden shadow-md mb-[50px]">
      <div className=" w-full h-[530px] bg-[#E6EBFC]"></div>

      <div className="py-[50px] px-10 ">
        <h1 className=" font-darker font-semibold text-[36px] text-black capitalize">
          a selection of the best apps for 2020
        </h1>

        <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-3">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <Flex className="mt-[30px] justify-between">
          <Flex className="gap-3 items-center">
            <Flex className="gap-[10px]">
              <div className="w-[20px] h-[20px] bg-[#BD93D8] rounded-full"></div>

              <span className=" font-roboto font-normal xl:text-[14px] text-textoff">
                Annette Black
              </span>
            </Flex>

            <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

            <span className="font-roboto font-normal xl:text-[14px] text-textoff">
              Mobile
            </span>

            <div className="w-[4px] h-[4px] rounded-full bg-main"></div>
            <Flex className="items-center gap-[10px]">
              <FaShareAlt className="font-roboto font-normal xl:text-[14px] text-textoff" />

              <span className="font-roboto font-normal xl:text-[14px] text-textoff">
                Share
              </span>
            </Flex>
          </Flex>

          <FaArrowRightLong className=" text-textoff text-2xl" />
        </Flex>
      </div>
    </div>
  );
};

export default BlogCard;
