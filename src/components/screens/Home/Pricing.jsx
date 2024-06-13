import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { FaGooglePlay } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import Image from "../../common/Image";
import UL from "../../common/UL";
import LI from "../../common/LI";
import { LuDot } from "react-icons/lu";

const Pricing = () => {
  return (
    <section className="mt-[160px]">
      <Container>
        <Flex className=" relative">
          <Image
            className="absolute right-[-200px] top-[-120px] w-[150px]"
            src="/shape1.svg"
            alt="shape"
          />
          <div className="w-1/2">
            <div>
              <Flex className="items-center justify-start gap-1">
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
              </Flex>

              <div className="mt-5 relative">
                <p className=" absolute w-full left-0 top-[-15px] font-code font-normal xl:text-[40px] text-fadeText">
                  easy download and ready to use
                </p>
                <p className=" relative z-10 font-darker font-semibold xl:w-[447px] xl:text-[50px] xl:leading-[100%] text-black capitalize">
                  easy download and ready to use
                </p>
              </div>
              <p></p>
            </div>

            <p className=" font-roboto font-normal xl:text-[16px] xl:leading-[170%] text-textoff mt-[30px] xl:w-[457px]">
              Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
              est officia excepteur cupidatat consectetur. Labore do nulla ipsum
              dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.
            </p>

            <Flex className="gap-5 mt-[50px]">
              <button className=" py-[18px] px-[35px] bg-main rounded-full">
                <Flex className="gap-[10px]">
                  <FaGooglePlay className=" text-[24px] text-white" />

                  <div>
                    <p className=" font-roboto font-normal xl:text-[10px] xl:leading-[100%] text-white">
                      Download on the
                    </p>
                    <p className=" text-left font-roboto font-medium xl:text-[14px] xl:leading-[120%] text-white">
                      Google play
                    </p>
                  </div>
                </Flex>
              </button>
              <button className=" py-[18px] px-[35px] border-[2px] border-main  rounded-full">
                <Flex className="gap-[10px]">
                  <GrApple className=" text-[24px] text-main" />

                  <div>
                    <p className=" font-roboto font-normal xl:text-[10px] xl:leading-[100%] text-main">
                      Download on the
                    </p>
                    <p className=" text-left font-roboto font-medium xl:text-[14px] xl:leading-[120%] text-main">
                      App Store
                    </p>
                  </div>
                </Flex>
              </button>
            </Flex>
          </div>
          <div className="w-1/2">
            <Flex className="gap-[52px]">
              <div className="w-1/2">
                <h4 className=" font-roboto font-medium xl:text-[12px] xl:leading-[170%] text-main uppercase">
                  basic
                </h4>

                <h1 className=" mt-[10px] inline-block relative font-roboto font-medium xl:text-[32px] text-black">
                  $12{" "}
                  <span className=" absolute right-[-25px] top-0 text-base">
                    .99
                  </span>
                </h1>

                <p className=" font-roboto font-normal xl:text-[16px] xl:leading-[170%] text-textoff">
                  /per month
                </p>

                <Image src="line.png" className="mt-3 my-5 w-full" />

                <UL>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                </UL>
              </div>
              <div className="w-1/2">
                <h4 className=" font-roboto font-medium xl:text-[12px] xl:leading-[170%] text-main uppercase">
                  popular
                </h4>

                <h1 className=" mt-[10px] inline-block relative font-roboto font-medium xl:text-[32px] text-black">
                  $99{" "}
                  <span className=" absolute right-[-25px] top-0 text-base">
                    .99
                  </span>
                </h1>

                <p className=" font-roboto font-normal xl:text-[16px] xl:leading-[170%] text-textoff">
                  /per month
                </p>

                <Image src="line.png" className="mt-3 my-5 w-full" />

                <UL>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                  <LI className="mb-[3px]">
                    <Flex className="items-center gap-[10px]">
                      <LuDot className="text-[30px] text-main" />

                      <p className="font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-textoff">
                        Proident excepteur
                      </p>
                    </Flex>
                  </LI>
                </UL>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Pricing;
