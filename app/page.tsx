import React from 'react';
import './style/style.css';
import Navbar from './Components/Navbar';
import Navbar2 from "./Components/Navbar2"
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import SectionThird from './Components/SectionThird';
import Banner from './Components/Banner';
import Recomend from './Components/Recomended';
import Sale from './Components/Sale';
import Comments from "./Components/Comments"
import Informations from './Components/Informations';




export default function Home() {
    return (
    <div>
   <div className="bg-[url('../public/BG.png')] flex flex-col transition-all h-full w-full bg-contain bg-no-repeat  select-none relative max-xl:bg-cover max-sm:bg-center ">
   <Navbar/>
    <Navbar2/>
   </div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThird/>
    <Banner/>
    <Recomend/>
    <Sale/>
    <Comments/>
    <Informations/>
    </div>
  );
}
