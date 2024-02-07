import React from "react";
import Container from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";
import Slider from "./Slider";

const SectionTwo = () => {
  return (
    <div>
      <Stack className="justify-center bg-zinc-100 py-10  ">
        <Stack direction="row" className=" justify-center">
        <Typography variant="h4" className="text">
          Ən Çox Satılan
        </Typography>
        </Stack>
        <Slider />
        <div className="text-white  flex cursor-pointer text-center h-10 items-center justify-center transition-all hover:scale-95">
      <Typography className=" bg-gradient-to-r from-gradient1 to-gradient2 p-2 px-10 rounded-sm">
        Kataloqa keç
      </Typography>
    </div>
      </Stack>
    </div>
  );
};

export default SectionTwo;
