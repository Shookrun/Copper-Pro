import React from "react";
import "./style/style.css";
import Banner from "@/Components/Home/Main/HomeBanner";
import Second from "@/Components/Home/Header/HomeSecond"
import Informations from "@/Components/Home/Main/HomeInformations";
import Recomended from "@/Components/Home/Main/HomeRecomended";
import Sale from "@/Components/Home/Main/HomeSale";
import SectionOne from "@/Components/Home/Main/HomeSectionOne";
import SectionThird from "@/Components/Home/Main/HomeSectionThird";
import SectionTwo from "@/Components/Home/Main/HomeSectionTwo";
import Comments from "@/Components/Home/Main/HomeComments";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Second/>
      <SectionOne />
      <SectionTwo />
      <SectionThird />
      <Banner />
      <Recomended />
      <Sale />
      <Comments />
      <Informations />
    </div>
  );
}
