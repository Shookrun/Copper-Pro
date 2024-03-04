import React from "react";
import "./style/style.css";
import Banner from "@/Components/Home/Main/Banner";
import Recomend from "@/Components/Home/Main/Recomended";
import Sale from "@/Components/Home/Main/Sale";

import Informations from "@/Components/Home/Main/Informations";
import Footer from "@/Components/Home/Footer/Footer";
import Header from "@/Components/Home/Header/Header";
import Main from "@/Components/Home/Main/Main";

export default function Home() {
  return (
    <div className="scroll-smooth">
        <Header />
      <Main/>
    </div>
  );
}
