import React from "react";
import { Stack, Typography } from "@mui/material";
import Slider from "./Slider";

const SectionTwo: React.FC = () => {
  return (
    <div className="my-8 py-8 relative">
      <Stack className="justify-center bg-zinc-100 py-10 relative">
        <Stack direction="row" className="justify-center my-4">
          <Typography variant="h4" className="text">
            Ən Çox Satılan
          </Typography>
        </Stack>
        <Slider />
        <div className="text-white flex cursor-pointer text-center h-10 items-center justify-center transition-all hover:scale-95">
          <Typography className="bg-gradient-to-r from-gradient1 to-gradient2 p-2 px-10 rounded-sm">
            Kataloqa keç
          </Typography>
        </div>
      </Stack>
    </div>
  );
};

export default SectionTwo;
