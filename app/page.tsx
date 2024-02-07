import React from 'react';
import './style/style.css';
import Navbar from './Components/Navbar';
import Navbar2 from "./Components/Navbar2"
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';




export default function Home() {
    return (
    <div>
   <div className="bg-[url('../public/BG.png')] flex flex-col transition-all h-full w-full bg-contain bg-no-repeat  select-none relative max-xl:bg-cover max-sm:bg-center ">
   <Navbar/>
    <Navbar2/>
   </div>
    <SectionOne/>
    <SectionTwo/>
    </div>
  );
}
