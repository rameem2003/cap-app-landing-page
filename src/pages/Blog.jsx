import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import BlogCard from "../components/screens/Blogs/BlogCard";
import SideSection from "../components/common/SideSection";
import Image from "./../components/common/Image";

const Blog = () => {
  return (
    <main className=" relative">
      <Image
        className="absolute hidden lg:block left-52 top-[470px] w-[150px]"
        src="/shape1.svg"
        alt="shape"
      />
      <Image
        className="absolute hidden lg:block right-10 bottom-[50px] w-[150px]"
        src="/shape1.svg"
        alt="shape"
      />
      <PageBanner text="Blog" />

      <Container>
        <Flex className="mt-[90px] gap-[50px] flex-col md:flex-row ">
          <div className=" w-full md:w-7/12 xl:w-9/12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className=" w-full md:w-5/12 xl:w-3/12">
            <SideSection />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default Blog;
