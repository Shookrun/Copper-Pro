import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import First from "./First"
import Second2 from "./Second2"
const Navbar2: React.FC = () => {
  return (
    <div className="relative bg-[url('../public/BG.png')] bg-cover bg-center">
      <First/>
      <Second2/>
    </div>
  );
};

export default Navbar2;
