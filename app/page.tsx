import React from "react";
import "./style/style.css";
import Navbar from "@/Components/Header/Navbar";
import Navbar2 from "@/Components/Header/Navbar2";
import SectionOne from "@/Components/Main/SectionOne";
import SectionTwo from "@/Components/Main/SectionTwo";
import SectionThird from "@/Components/Main/SectionThird";
import Banner from "@/Components/Main/Banner";
import Recomend from "@/Components/Main/Recomended";
import Sale from "@/Components/Main/Sale";
import Comments from "@/Components/Main/Comments";
import Informations from "@/Components/Main/Informations";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="bg-[url('../public/BG.png')] flex flex-col transition-all h-full w-full bg-contain bg-no-repeat  select-none relative max-xl:bg-cover max-sm:bg-center  ">
        <Navbar />
        <Navbar2 />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThird />
      <Banner />
      <Recomend />
      <Sale />
      <Comments />
      <Informations />
    </div>
  );
}
