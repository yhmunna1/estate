import React from "react";
import Property from "./Property";
import LatestProperty from "./LatestProperty";
import Listings from "./Listings";
import SearchProperties from "./SearchProperties";
import Hero from "./Hero";
import Contact from "./contact";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <SearchProperties></SearchProperties>
      <Property></Property>
      <LatestProperty></LatestProperty>
      <Listings></Listings>
      <Contact></Contact>
    </div>
  );
};

export default Home;
