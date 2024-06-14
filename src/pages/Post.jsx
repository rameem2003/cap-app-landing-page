import React from "react";
import Image from "../components/common/Image";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import SideSection from "../components/common/SideSection";
import { FaShareAlt } from "react-icons/fa";
import UL from "./../components/common/UL";
import LI from "./../components/common/LI";
import { GoDotFill } from "react-icons/go";
import { BiReply } from "react-icons/bi";

const Post = () => {
  return (
    <main className=" relative">
      <Image
        className="absolute left-52 top-[470px] w-[150px]"
        src="/shape1.svg"
        alt="shape"
      />
      <Image
        className="absolute right-10 bottom-[50px] w-[150px]"
        src="/shape1.svg"
        alt="shape"
      />

      <PageBanner text="Post" />

      <Container>
        <Flex className="gap-[50px]">
          <div className="w-9/12">
            <div className=" w-full h-[530px] bg-[#E6EBFC] rounded-[20px] relative">
              <div className=" p-[14px] rounded-t-[5px] bg-main w-[60px] absolute left-10 bottom-0">
                <p className=" font-roboto font-medium xl:text-[14px] text-white text-center">
                  DEC
                </p>
                <p className=" font-roboto font-bold xl:text-[28px] text-white text-center mt-1">
                  10
                </p>
              </div>
            </div>

            <Flex className="gap-3 items-center mt-[30px] pb-[30px] border-b-[1px] border-dashed border-black/60">
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

            <div>
              <h1 className=" font-darker font-semibold xl:text-[36px] leading-[100%] text-black mt-10 capitalize">
                a selection of the best apps for 2020
              </h1>

              <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-[25px]">
                There’s such a thing as “too much information”, especially for
                the companies scaling out their sales operations. That’s why
                Attentive was born in 2015 help sales teams make their
                increasing pipelines simpler to manage. Indeed, the small,
                Portugal-based team is itself focused on scaling, having much
                participated in accelerator In this episode, Attentive founder
                Robert Fox talks about what it takes to build a tech new product
                from the ground up. Discover their approach to running an
                engineering team, from adopting new open source technologies, to
                onboarding junior developers and learning .
              </p>
            </div>

            <div className="p-[50px] rounded-[20px] shadow-md mt-10">
              <p className=" font-darker font-medium xl:text-[28px] text-textoff">
                “Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem
                amet ut ad aute irure exercitation elit exercitation Lorem non
                aliqua occaecat ea sunt. Commodo non duis aute mollit sint.
                Mollit veniam dolor aliqua nulla sit est do mollit esse ut
                amet.”
              </p>

              <Flex className="items-center justify-between">
                <p className=" font-darker font-semibold xl:text-[22px] text-black">
                  Robert Fox
                </p>

                <Image src="/comma.png" />
              </Flex>
            </div>

            <div>
              <h1 className=" font-darker font-semibold xl:text-[36px] leading-[100%] text-black mt-10 capitalize">
                Better Security and faster Server
              </h1>

              <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-[25px]">
                There’s such a thing as “too much information”, especially for
                the companies scaling out their sales operations. That’s why
                Attentive was born in 2015 help sales teams make their
                increasing pipelines simpler to manage. Indeed, the small.
              </p>

              <UL className="mt-10">
                <LI className="flex items-center gap-[15px] mb-5">
                  <GoDotFill className=" text-main" />

                  <p className=" font-roboto font-normal xl:text-[16px] text-textoff">
                    We’ve been supporting WordPress since the beginning.
                  </p>
                </LI>
                <LI className="flex items-center gap-[15px] mb-5">
                  <GoDotFill className=" text-main" />

                  <p className=" font-roboto font-normal xl:text-[16px] text-textoff">
                    We’ve been supporting WordPress since the beginning.
                  </p>
                </LI>
                <LI className="flex items-center gap-[15px] mb-5">
                  <GoDotFill className=" text-main" />

                  <p className=" font-roboto font-normal xl:text-[16px] text-textoff">
                    We’ve been supporting WordPress since the beginning.
                  </p>
                </LI>
                <LI className="flex items-center gap-[15px] mb-5">
                  <GoDotFill className=" text-main" />

                  <p className=" font-roboto font-normal xl:text-[16px] text-textoff">
                    We’ve been supporting WordPress since the beginning.
                  </p>
                </LI>
              </UL>

              <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-[25px]">
                There’s such a thing as “too much information”, especially for
                the companies scaling out their sales operations. That’s why
                Attentive was born in 2015 help sales teams make their
                increasing pipelines simpler to manage. Indeed, the small,
                Portugal-based team is itself focused on scaling, having much
                participated in accelerator In this episode, Attentive founder
                Robert Fox talks about what it takes to build a tech new product
                from the ground up. Discover their approach to running an
                engineering team, from adopting new open source technologies, to
                onboarding junior developers and learning.
              </p>
            </div>

            <Flex className="gap-[26px] items-center mt-10 pb-5 border-b-[1px] border-dashed border-black/60">
              <p className=" font-roboto font-medium xl:text-[16px] text-black">
                Tags:
              </p>
              <Flex>
                <Flex className="gap-3 items-center  flex-wrap">
                  <span className=" font-roboto font-normal xl:text-[14px] text-textoff">
                    Annette Black
                  </span>

                  <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

                  <span className="font-roboto font-normal xl:text-[14px] text-textoff">
                    Android app
                  </span>
                </Flex>
              </Flex>
            </Flex>

            <Flex className="mt-10 py-5 px-10 rounded-[20px] shadow-md">
              <div className="w-4/12">
                <Image src="/shape3.png" />
              </div>
              <div className="w-8/12">
                <h2 className=" font-darker font-semibold xl:text-[28px] text-black">
                  Robert Fox
                </h2>

                <p className="mt-[15px] font-roboto font-normal xl:text-[16px] text-textoff">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non accaecat ea sunt.
                </p>

                <Flex className="mt-[38px]">
                  <Flex className="gap-3 items-center  flex-wrap">
                    <span className=" font-roboto font-normal xl:text-[14px] text-textoff">
                      Annette Black
                    </span>

                    <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

                    <span className="font-roboto font-normal xl:text-[14px] text-textoff">
                      Android app
                    </span>
                  </Flex>
                </Flex>
              </div>
            </Flex>

            <div className=" mt-[90px] ">
              <h1 className=" font-darker font-semibold xl:text-[36px] text-black">
                Comments (3)
              </h1>

              <div className="mb-10 pb-[30px] border-b-[1px] border-dashed border-black/60">
                <Flex className="gap-3 items-center mt-[30px] ">
                  <Flex className="gap-[10px]">
                    <div className="w-[20px] h-[20px] bg-[#BD93D8] rounded-full"></div>

                    <span className=" font-roboto font-normal xl:text-[14px] text-textoff">
                      Annette Black
                    </span>
                  </Flex>

                  <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

                  <span className="font-roboto font-normal xl:text-[14px] text-textoff">
                    DEC 10, 2020
                  </span>

                  <div className="w-[4px] h-[4px] rounded-full bg-main"></div>
                  <Flex className="items-center gap-[10px]">
                    <BiReply className="font-roboto font-normal xl:text-[14px] text-main" />

                    <span className="font-roboto font-normal xl:text-[14px] text-main">
                      Reply
                    </span>
                  </Flex>
                </Flex>

                <p className=" font-roboto font-normal text-[16px] text-textoff mt-5">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non aliqua occaecat ea sunt.
                </p>
              </div>

              <div className="mb-10 pb-[30px] border-b-[1px] border-dashed border-black/60">
                <Flex className="gap-3 items-center mt-[30px] ">
                  <Flex className="gap-[10px]">
                    <div className="w-[20px] h-[20px] bg-[#BD93D8] rounded-full"></div>

                    <span className=" font-roboto font-normal xl:text-[14px] text-textoff">
                      Annette Black
                    </span>
                  </Flex>

                  <div className="w-[4px] h-[4px] rounded-full bg-main"></div>

                  <span className="font-roboto font-normal xl:text-[14px] text-textoff">
                    DEC 10, 2020
                  </span>

                  <div className="w-[4px] h-[4px] rounded-full bg-main"></div>
                  <Flex className="items-center gap-[10px]">
                    <BiReply className="font-roboto font-normal xl:text-[14px] text-main" />

                    <span className="font-roboto font-normal xl:text-[14px] text-main">
                      Reply
                    </span>
                  </Flex>
                </Flex>

                <p className=" font-roboto font-normal text-[16px] text-textoff mt-5">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non aliqua occaecat ea sunt.
                </p>
              </div>
            </div>

            <div className="mt-[90px]">
              <h1 className=" capitalize font-darker font-semibold xl:text-[36px] text-black">
                leave a reply
              </h1>

              <Flex className="gap-5 my-10">
                <input
                  type="text"
                  placeholder="Name "
                  className=" w-[50%] py-[18px] px-[30px] rounded-[50px] border-[1px] border-[#E6EBFC]"
                />
                <input
                  type="text"
                  placeholder="Email "
                  className=" w-[50%] py-[18px] px-[30px] rounded-[50px] border-[1px] border-[#E6EBFC]"
                />
              </Flex>

              <textarea
                className="py-[18px] h-[150px] w-full px-[30px] rounded-[20px] border-[1px] border-[#E6EBFC]"
                placeholder="Message"
                name=""
                id=""
              ></textarea>

              <button className=" mt-5 py-4 px-[35px] rounded-full bg-main font-roboto font-medium xl:text-[16px] text-white">
                Post comment
              </button>
            </div>
          </div>
          <div className="w-3/12">
            <SideSection />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default Post;
