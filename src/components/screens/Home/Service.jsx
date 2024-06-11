import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const Service = () => {
  return (
    <section className="mt-[150px]">
      <Container>
        <div>
          <Flex className="items-center justify-center gap-1">
            <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
          </Flex>

          <div className="mt-5 relative">
            <p className=" absolute w-full text-center left-[50%] top-[-15px] translate-x-[-50%] font-code font-normal 2xl:text-[40px] text-fadeText">
              See what you will get with us
            </p>
            <p className=" relative z-10 font-darker font-semibold 2xl:text-[50px] 2xl:leading-[100%] text-black text-center capitalize">
              See what you will get with us
            </p>
          </div>
          <p></p>
        </div>

        <Flex className="mt-[50px] items-center justify-center gap-[30px] ">
          <div className="w-[30%] shadow-lg py-[34px] px-[32px] rounded-[20px]">
            <Image src="/s1.svg" className="w-full" />

            <div className="mt-9">
              <h2 className=" font-darker font-semibold 2xl:text-[28px] 2xl:leading-[110%] text-black">
                Development courses
              </h2>
              <p className=" mt-[15px] font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-textoff 2xl:w-[280px]">
                Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                incididunt dolore ipsum tempor duis do ullamco eiusmod officia
                magna ad id.
              </p>
            </div>
          </div>

          <div className="w-[30%] shadow-lg py-[34px] px-[32px] rounded-[20px]">
            <Image src="/s2.svg" className="w-full" />

            <div className="mt-9">
              <h2 className=" font-darker font-semibold 2xl:text-[28px] 2xl:leading-[110%] text-black">
                Money saving services
              </h2>
              <p className=" mt-[15px] font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-textoff 2xl:w-[280px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="w-[30%] shadow-lg py-[34px] px-[32px] rounded-[20px]">
            <Image src="/s3.svg" className="w-full" />

            <div className="mt-9">
              <h2 className=" font-darker font-semibold 2xl:text-[28px] 2xl:leading-[110%] text-black">
                Usability interface
              </h2>
              <p className=" mt-[15px] font-roboto font-normal 2xl:text-[16px] 2xl:leading-[170%] text-textoff 2xl:w-[280px]">
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Culpa non ex tempor qui
                nulla laborum.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Service;
