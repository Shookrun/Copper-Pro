"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import First from "./First"
// import "./style/style.css"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "@/app/style/style.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";




const Slider: React.FC = () => {
  return (
    <div className="headerSwiper flex justify-start ">
      <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={10}
       slidesPerView={1}
     
       loop={true}
       navigation
       pagination={{ 
        
        clickable: true }}
       className="w-[100vw] "
     >
       
       <SwiperSlide className="h-60 my-28  w-[800px]">
       <Stack className=" w-[100vw] ">
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
          
        </Container>
      </Stack>
      
       </SwiperSlide>
       
       <SwiperSlide className="h-60 my-28  w-[800px]">
       <Stack className=" w-[100vw]">
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
         
        </Container>
      </Stack>
      
       </SwiperSlide>
       
       <SwiperSlide className="h-60 my-28  w-[800px]">
       <Stack className=" w-[100vw] ">
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
          
        </Container>
      </Stack>
      
       </SwiperSlide>
 
      
     </Swiper>
    </div>
    
   );
 }

export default Slider;