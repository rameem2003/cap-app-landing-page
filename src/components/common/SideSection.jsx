import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Flex from "./Flex";

const SideSection = () => {
  return (
    <section>
      <div className=" relative">
        <input
          type="text"
          placeholder="Search "
          className=" w-full py-[18px] px-[30px] rounded-[50px] border-[1px] border-[#B3B1B7]"
        />

        <IoSearch className=" text-[#B3B1B7] text-[18px] absolute right-2 top-[50%] translate-y-[-50%]" />
      </div>

      <div className="mt-[50px]">
        <p className=" font-darker font-semibold xl:text-[28px] text-black pb-[10px] border-b-[1px] border-dashed border-[#5437B2] mb-[25px]">
          Recent posts
        </p>

        <div className="mb-[25px]">
          <p className=" font-roboto font-medium xl:text-[12px] text-main">
            Dec 10, 2020
          </p>

          <h1 className=" font-darker font-semibold xl:text-[22px] text-black mt-[5px]">
            Launch of a new convenient feature this Saturday...
          </h1>

          <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor...
          </p>
        </div>

        <div className="mb-[25px]">
          <p className=" font-roboto font-medium xl:text-[12px] text-main">
            Dec 10, 2020
          </p>

          <h1 className=" font-darker font-semibold xl:text-[22px] text-black mt-[5px]">
            Launch of a new convenient feature this Saturday...
          </h1>

          <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor...
          </p>
        </div>
      </div>

      <div className="mt-[50px]">
        <p className=" font-darker font-semibold xl:text-[28px] text-black pb-[10px] border-b-[1px] border-dashed border-[#5437B2] mb-[25px]">
          Recent comments
        </p>

        <div className="mb-[25px]">
          <FaRegComment className=" text-[20px] text-main" />

          <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor...
          </p>
        </div>
        <div className="mb-[25px]">
          <FaRegComment className=" text-[20px] text-main" />

          <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor...
          </p>
        </div>
      </div>

      <div className="mt-[50px]">
        <p className=" font-darker font-semibold xl:text-[28px] text-black pb-[10px] border-b-[1px] border-dashed border-[#5437B2] mb-[25px]">
          Tags
        </p>

        <Flex className="gap-3 items-center mt-[25px] flex-wrap">
          <span className=" font-roboto font-normal xl:text-[14px] text-textoff">
            Annette Black
          </span>

          <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

          <span className="font-roboto font-normal xl:text-[14px] text-textoff">
            Android app
          </span>

          <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

          <span className="font-roboto font-normal xl:text-[14px] text-textoff">
            Android app
          </span>

          <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

          <span className="font-roboto font-normal xl:text-[14px] text-textoff">
            Android app
          </span>

          <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

          <span className="font-roboto font-normal xl:text-[14px] text-textoff">
            Android app
          </span>

          <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

          <span className="font-roboto font-normal xl:text-[14px] text-textoff">
            Android app
          </span>
        </Flex>
      </div>
    </section>
  );
};

export default SideSection;
