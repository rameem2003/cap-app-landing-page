import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import OneFAQ from "./OneFAQ";

const FAQ = () => {
  return (
    <section className="">
      <Container>
        <Flex className=" flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image src="/video.png" />
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <Flex className="items-center justify-start gap-1">
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
              </Flex>

              <div className="mt-5 relative">
                <p className=" absolute w-full left-0 top-[-15px] font-code font-normal text-[20px] xl:text-[40px] text-fadeText">
                  Frequently Asked Questions
                </p>
                <p className=" relative z-10 font-darker font-semibold xl:w-[447px] text-[30px] xl:text-[50px] xl:leading-[100%] text-black capitalize">
                  Frequently Asked Questions
                </p>
              </div>
              <p></p>
            </div>

            <div className="mt-[50px]">
              <OneFAQ />
              <OneFAQ />
              <OneFAQ />
              <OneFAQ />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FAQ;
