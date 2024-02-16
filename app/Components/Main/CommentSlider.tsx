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
import "@/app/style/style.css"

interface CardItem {
    id: number;
    name: string;
    description: string;
    date?: string;
}

const Slider: React.FC = () => {
    let card: CardItem[] = [
        {
            id: 1,
            name: "Zaur Əliyev",
            description: `Avadanlıqlarımız əl ilə hazırlanır. Məhsullarımızın keyfiyyətinə
            daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya
            istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə
            problemin ən əlverişli həllini tapırıq.`,
            date: "20.10.21"
        },
        {
            id: 2,
            name: "Zaur Əliyev",
            description: `Avadanlıqlarımız əl ilə hazırlanır. Məhsullarımızın keyfiyyətinə
            daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya
            istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə
            problemin ən əlverişli həllini tapırıq.`
        },
        {
            id: 3,
            name: "Zaur Əliyev",
            description: `Avadanlıqlarımız əl ilə hazırlanır. Məhsullarımızın keyfiyyətinə
            daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya
            istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə
            problemin ən əlverişli həllini tapırıq.`
        }
    ];

    return (
      <div className="swiper_slider  ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="w-9/12 "
        >
         
          <SwiperSlide className="h-48 my-8 py-10">
  <Stack direction="row" className="bg-white w-full  ">
  {card.map(({ id, name, description,date }) => (
      <div key={id} className=" card  flex flex-col justify-center mx-1 h-[300px]">
        <Image src="/pp.png" alt="Profile" width={50} height={50} className="" />
        <Typography variant="h5">{name}</Typography>
        <Typography sx={{ fontStyle: 'italic', m: 1 }}>
          {description}
        </Typography>
        <Typography>
          {date}
        </Typography>
      </div>
      
    ))}
   
  </Stack>
  </SwiperSlide>
    
  
  
  
  <SwiperSlide className="h-48 my-8 py-10">
  <Stack direction="row" className="  bg-white w-full  ">
  {card.map(({ id, name, description,date }) => (
      <div key={id} className="card flex flex-col justify-center mx-1  h-[300px]  ">
        <Image src="/pp.png" alt="Profile" width={50} height={50} className="" />
        <Typography variant="h5">{name}</Typography>
        <Typography sx={{ fontStyle: 'italic', m: 1 }}>
          {description}
        </Typography>
        <Typography>
          {date}
        </Typography>
      </div>
    ))}
  </Stack>
  </SwiperSlide>
  
  <SwiperSlide className="h-48 my-8 py-10">
  <Stack direction="row" className="bg-white w-full  ">
  {card.map(({ id, name, description,date }) => (
      <div key={id} className=" card flex flex-col justify-center mx-1  h-[300px]   ">
        <Image src="/pp.png" alt="Profile" width={50} height={50} className="" />
        <Typography variant="h5">{name}</Typography>
        <Typography sx={{ fontStyle: 'italic', m: 1 }}>
          {description}
        </Typography>
        <Typography>
          {date}
        </Typography>
      </div>
    ))}
  </Stack>
  </SwiperSlide>
        </Swiper>
      </div>
    );
  }

export default Slider;
