import React from "react";
import "./style/style.css";
import Banner from "@/Components/Home/Main/Banner";
import Informations from "@/Components/Home/Main/Informations";
import Recomended from "@/Components/Home/Main/Recomended";
import Sale from "@/Components/Home/Main/Sale";
import SectionOne from "@/Components/Home/Main/SectionOne";
import SectionThird from "@/Components/Home/Main/SectionThird";
import SectionTwo from "@/Components/Home/Main/SectionTwo";
import Comments from "@/Components/Home/Main/Comments";

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
