import React from "react";
import "./style/style.css";
import Banner from "@/Components/Home/Main/HomeBanner";
import Informations from "@/Components/Home/Main/HomeInformations";
import Recomended from "@/Components/Home/Main/HomeRecomended";
import Sale from "@/Components/Home/Main/HomeSale";
import SectionOne from "@/Components/Home/Main/HomeSectionOne";
import SectionThird from "@/Components/Home/Main/HomeSectionThird";
import SectionTwo from "@/Components/Home/Main/HomeSectionTwo";
import Comments from "@/Components/Home/Main/HomeComments";

export default function page() {
  return (
    <div className="scroll-smooth">
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
