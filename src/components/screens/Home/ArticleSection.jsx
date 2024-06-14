import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const ArticleSection = () => {
  return (
    <section className="mt-[160px]">
      <Container>
        <Flex className="gap-[53px] flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div>
              <Flex className="items-center justify-start gap-1">
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
                <div className="h-[6px] w-[6px] rounded-full bg-main"></div>
              </Flex>

              <div className="mt-5 relative">
                <p className=" absolute w-full left-0 top-[-15px] font-code font-normal xl:text-[40px] text-fadeText">
                  read the latest news and articles
                </p>
                <p className=" relative z-10 font-darker font-semibold xl:w-[447px] xl:text-[50px] xl:leading-[100%] text-black capitalize">
                  read the latest news and articles
                </p>
              </div>
              <p></p>
            </div>

            <p className=" font-roboto font-normal xl:text-[16px] text-textoff mt-[30px] mb-[50px]">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
              dolore ipsum tempor duis do ullamc.
            </p>

            <Link className=" font-roboto font-normal xl:text-[12px] leading-[170%] pb-1 tracking-[3px] uppercase text-main border-b-[1px] border-main">
              read more
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <ArticleCard />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ArticleSection;
