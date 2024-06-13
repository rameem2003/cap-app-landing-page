import React from "react";
import Flex from "../../common/Flex";
import { FaShareAlt } from "react-icons/fa";

const ArticleCard = () => {
  return (
    <div className="p-10 rounded-[20px] shadow-md w-[95%]">
      <p className=" font-roboto font-medium xl:text-[12px] leading-[170%] text-main">
        Dec 10, 2020
      </p>

      <h1 className=" font-darker font-semibold xl:text-[28px] leading-[110%] text-black xl:w-[400px] capitalize">
        Launch of a new convenient feature this Saturday. Trend 2020
      </h1>

      <p className="mt-[25px] mb-[30px] font-roboto font-normal xl:text-[16px] leading-[170%] text-textoff">
        Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua
        cupidatat adipisicing in cillum.
      </p>

      <Flex className="gap-3 items-center">
        <Flex className="gap-[10px]">
          <div className="w-[20px] h-[20px] bg-[#BD93D8] rounded-full"></div>

          <span className=" font-roboto font-normal xl:text-[14px] text-textoff">
            Annette Black
          </span>
        </Flex>

        <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

        <Flex className="items-center gap-[10px]">
          <FaShareAlt className="font-roboto font-normal xl:text-[14px] text-textoff" />

          <span className="font-roboto font-normal xl:text-[14px] text-textoff">
            Share
          </span>
        </Flex>
      </Flex>
    </div>
  );
};

export default ArticleCard;
