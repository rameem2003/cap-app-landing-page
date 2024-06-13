import React, { useState } from "react";
import Flex from "../../common/Flex";
import { TiMinus, TiPlus } from "react-icons/ti";

const OneFAQ = () => {
  const [faq, setFaq] = useState(false);
  return (
    <div className=" mb-[30px]">
      <Flex
        className={`items-center justify-between pb-5 border-b-[1px] border-dashed ${
          faq ? "border-main" : "border-black"
        } `}
      >
        <p className=" font-darker font-semibold xl:text-[24px] text-black">
          Is it Full Digital Marketing Agency?
        </p>
        {faq ? (
          <TiMinus
            onClick={() => setFaq(!faq)}
            className=" text-[20px] cursor-pointer text-main"
          />
        ) : (
          <TiPlus
            onClick={() => setFaq(!faq)}
            className=" text-[20px] cursor-pointer"
          />
        )}
        {/* <TiPlus className=" text-primary text-[30px] cursor-pointer" /> */}
      </Flex>

      {faq && (
        <div className=" w-full">
          {/* <div className=" w-full h-[1px] bg-[#D7DFFE] my-5"></div> */}
          <p className=" mt-5 font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
            It is a long established fact that a reader will be distracted by
            the readable content of page when looking at its layout. The point
            of using Lorem Ipsuim is that it has as more less or randomised
            words which don't look even slightly believable. If you are going to
            use a passage of Lorem Ipsum, you need to be sure.
          </p>
        </div>
      )}
    </div>
  );
};

export default OneFAQ;
