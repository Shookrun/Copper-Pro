import React from "react";
import "./style/style.css";

import Main from "@/Components/Home/Main";
import Header from "@/Components/Home/Header/Header";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header/>
       <Main/>
       
    </div>
  );
}
