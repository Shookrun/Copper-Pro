import React from "react";
import "./style/style.css";
import Navbar from "@/Components/Home/Header/Navbar";
import Navbar2 from "@/Components/Home/Header/Second";
import SectionOne from "@/Components/Home/Main/SectionOne";
import SectionTwo from "@/Components/Home/Main/SectionTwo";
import SectionThird from "@/Components/Home/Main/SectionThird";
import Banner from "@/Components/Home/Main/Banner";
import Recomend from "@/Components/Home/Main/Recomended";
import Sale from "@/Components/Home/Main/Sale";
import Comments from "@/Components/Home/Main/Comments";
import Informations from "@/Components/Home/Main/Informations";
import Footer from "@/Components/Home/Footer/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
        <Navbar />
      
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
