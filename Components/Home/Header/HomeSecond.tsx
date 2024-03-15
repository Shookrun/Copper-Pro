import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import First from "./HomeFirst"
import Second2 from "./HomeSecond2"
const Navbar2: React.FC = () => {
  return (
    <div className="relative bg-[url('../public/BG.png')] bg-cover bg-center max-sm:bg-cover">
      <First/>
      <Second2/>
    </div>
  );
};

export default Navbar2;
