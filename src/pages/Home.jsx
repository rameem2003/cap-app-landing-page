import React from "react";
import Banner from "../components/screens/Home/Banner";
import Service from "../components/screens/Home/Service";
import Features from "../components/screens/Home/Features";
import Presentation from "../components/screens/Home/Presentation";
import Pricing from "../components/screens/Home/Pricing";
import Comments from "../components/screens/Home/Comments";
import Trail from "../components/screens/Home/Trail";
import FAQ from "../components/screens/Home/FAQ";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Features />
      <Presentation />
      <Pricing />
      <Comments />
      <Trail />
      <FAQ />
    </>
  );
};

export default Home;
