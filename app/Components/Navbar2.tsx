import React from "react";
import { Container, Stack, Typography } from "@mui/material";

const Navbar2: React.FC = () => {
  return (
    <div className="relative">
      <Stack className="my-40 gap-12 justify-between h-96 max-sm:my-10">
        <Container maxWidth="lg" className="flex flex-col gap-4">
          <Typography
            variant="h1"
            className="text text-white transition-all w-[45%] caret-slate-50 max-sm:text-[30px]"
          >
            ƏN YAXŞISI
          </Typography>
          <div className="btt w-[35%] transition-all h-0.5 max-sm:w-[47%]"></div>
          <Typography
            variant="h4"
            className="mont text-white w-[50%] transition-all max-sm:text-[20px]"
          >
            Efir yağları üçün distillə
          </Typography>
          <Stack direction="row" className="text-white w-[18%] justify-between max-sm:flex-col">
            <Typography variant="h6" className="max-sm:text-2xl">Qiymət</Typography>
            <Typography variant="h6" className="w-20">90 AZN</Typography>
          </Stack>
          <Stack className="text-white cursor-pointer w-[18%] text-center h-10 items-center justify-center transition-all bg-gradient-to-r from-gradient1 to-gradient2 hover:scale-95 max-sm:w-40">
            <Typography variant="subtitle1">Al</Typography>
          </Stack>
          <Stack direction="row" className="gap-2 transition-all">
            <div className="transition-all bg-white hover:bg-gradient-to-r from-gradient1 to-gradient2 w-[10px] h-[10px]"></div>
            <div className="transition-all bg-white hover:bg-gradient-to-r from-gradient1 to-gradient2 w-[10px] h-[10px]"></div>
            <div className="transition-all bg-white hover:bg-gradient-to-r from-gradient1 to-gradient2 w-[10px] h-[10px]"></div>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
};

export default Navbar2;
