import React from "react";
import Image from "./Image";

const Popup = ({ popup }) => {
  return (
    <div
      className={` duration-700 ease-in-out  bg-popupBG bg-cover bg-no-repeat py-4 xl:py-[80px] px-[20px] fixed top-[50%] translate-y-[-50%] ${
        popup ? "right-0" : "right-[-300%]"
      }  w-full xl:max-w-[600px] rounded-l-[20px]`}
    >
      <Image
        src="/lotapata.png"
        alt="pata"
        className=" absolute hidden md:block left-[-134px]"
      />
      <h1 className="font-darker font-semibold xl:text-[45px] xl:leading-[90%] text-white w-[380px] capitalize">
        Get a free trial for <span className=" text-main">30</span> {""} days
      </h1>

      <p className=" font-roboto font-normal text-[16px] leading-[170%] text-white mt-[30px] mb-10 xl:w-[457px]">
        Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
        dolore ipsum tempor duis do ullamc.
      </p>

      <form action="">
        <input
          type="text"
          placeholder="Name"
          className=" w-full py-[18px] px-[30px] rounded-[50px] border-[1px] border-[#E6EBFC] mb-5"
        />
        <input
          type="text"
          placeholder="Email "
          className=" w-full py-[18px] px-[30px] rounded-[50px] border-[1px] border-[#E6EBFC] mb-5"
        />

        <textarea
          className="py-[18px] h-[150px] w-full px-[30px] rounded-[20px] border-[1px] border-[#E6EBFC] mb-5"
          placeholder="Message"
          name=""
          id=""
        ></textarea>

        <button className=" mt-5 py-4 px-[35px] rounded-full bg-main font-roboto font-medium xl:text-[16px] text-white capitalize">
          get a free trial
        </button>
      </form>
    </div>
  );
};

export default Popup;
