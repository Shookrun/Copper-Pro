import React from "react";
import { Stack, Typography } from "@mui/material";
import Slider from "./Slider";

const SectionThird: React.FC = () => {
  return (
    <div className="relative">
      <Stack className="justify-center bg-white py-10">
        <Stack direction="row" className="justify-center my-4">
          <Typography variant="h4" className="text">
            YenİlİklƏr
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

export default SectionThird;
