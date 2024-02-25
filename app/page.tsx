import React from "react";
import "./style/style.css";
import Navbar from "@/Components/Header/Navbar";
import Navbar2 from "@/Components/Header/Second";
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
