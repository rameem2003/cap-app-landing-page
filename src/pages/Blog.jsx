import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import BlogCard from "../components/screens/Blogs/BlogCard";
import SideSection from "../components/common/SideSection";

const Blog = () => {
  return (
    <main>
      <PageBanner text="Blog" />

      <Container>
        <Flex className="mt-[90px] gap-[50px]">
          <div className="w-9/12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="w-3/12">
            <SideSection />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default Blog;
