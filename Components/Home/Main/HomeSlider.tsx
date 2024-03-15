"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, Typography } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";




const Slider: React.FC = () => {
  return (
    <div className="sectionTwo slider ">
      <Swiper
       // install Swiper modules
       autoplay={true}
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={10}
       slidesPerView={3}
       navigation
       effect="fade"
      //  loop={true}
       pagination={{ clickable: true }}
       className="w-8/12 "
     >
       <SwiperSlide className=" h-28 ">
        <div className="h-80 w-full flex flex-col mb-10 justify-between">
        <Image
           src="/card1.png"
           alt="Image"
           width={130}
           height={130}
           className="w-full"
         />
        <div className="flex justify-between items-center relative  h-20">
        <Typography className="text text-sm" variant="subtitle1">
         çİnİ qulplu mİs çaynİk 
         </Typography>
         <Typography className="text text-md font-bold" variant="subtitle1">
         88 AZN
         </Typography>
        </div>
        <div className="absolute right-0 text-[25px] bg-white py-2 transition-all duration-300 hover:text-red">
        <CiHeart/>
        </div>
        </div>
       </SwiperSlide>
 
       <SwiperSlide className="">
          <div className="h-80 w-full flex flex-col justify-between">
          <Image
           src="/card2.png"
           alt="Image"
           width={130}
           height={130}
           className="w-full"
         />
        <div className="flex justify-between items-center relative  h-20">
        <Typography className="text text-sm" variant="subtitle1">
         çİnİ qulplu mİs çaynİk 
         </Typography>
         <Typography className="text text-md font-bold" variant="subtitle1">
         88 AZN
         </Typography>
        </div>
        <div className="absolute right-0 text-[25px] bg-white py-2 transition-all duration-300 hover:text-red">
        <CiHeart/>
        </div>
        </div>
       </SwiperSlide>
 
       <SwiperSlide className="">
         
         <div className="h-80 w-full flex flex-col justify-between">
         <Image
           src="/card3.png"
           alt="Image"
           width={130}
           height={130}
           className="w-full"
         />
        <div className="flex justify-between items-center relative  h-20">
        <Typography className="text text-sm" variant="subtitle1">
         çİnİ qulplu mİs çaynİk 
         </Typography>
         <Typography className="text text-md font-bold" variant="subtitle1">
         88 AZN
         </Typography>
        </div>
        <div className="absolute right-0 text-[25px] bg-white py-2 transition-all duration-300 hover:text-red">
        <CiHeart/>
        </div>
        </div>
       </SwiperSlide>
 
       <SwiperSlide className="">
         
         <div className="h-80 w-full flex flex-col justify-between">
         <Image
           src="/card1.png"
           alt="Image"
           width={130}
           height={130}
           className="w-full"
         />
        <div className="flex justify-between items-center relative  h-20">
        <Typography className="text text-sm" variant="subtitle1">
         çİnİ qulplu mİs çaynİk 
         </Typography>
         <Typography className="text text-md font-bold" variant="subtitle1">
         88 AZN
         </Typography>
        </div>
        <div className="absolute right-0 text-[25px] bg-white py-2 transition-all duration-300 hover:text-red">
        <CiHeart/>
        </div>
        </div>
       </SwiperSlide>
 
       <SwiperSlide className="">
        
          <div className="h-80 w-full flex flex-col justify-between">
          <Image
           src="/card2.png"
           alt="Image"
           width={130}
           height={130}
           className="w-full"
         />
        <div className="flex justify-between items-center relative  h-20">
        <Typography className="text text-sm" variant="subtitle1">
         çİnİ qulplu mİs çaynİk 
         </Typography>
         <Typography className="text text-md font-bold" variant="subtitle1">
         88 AZN
         </Typography>
        </div>
        <div className="absolute right-0 text-[25px] bg-white py-2 transition-all duration-300 hover:text-red">
        <CiHeart/>
        </div>
        </div>
       </SwiperSlide>
 
      
     </Swiper>
    </div>
    
   );
 }

export default Slider;
