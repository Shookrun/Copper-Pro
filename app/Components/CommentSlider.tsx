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

export default function Slider() {
    let card = [
        {
            id:1,
            name:"Zaur Əliyev",
            description:
            `Avadanlıqlarımız əl ilə hazırlanır. Məhsullarımızın keyfiyyətinə
            daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya
            istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə
            problemin ən əlverişli həllini tapırıq.`,
        },
        {
            id:2,
            name:"Zaur Əliyev",
            description:
            `Avadanlıqlarımız əl ilə hazırlanır. Məhsullarımızın keyfiyyətinə
            daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya
            istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə
            problemin ən əlverişli həllini tapırıq.`
                     
        },
        {
            id:3,
            name:"Zaur Əliyev",
            description:
            `Avadanlıqlarımız əl ilə hazırlanır. Məhsullarımızın keyfiyyətinə
            daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya
            istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə
            problemin ən əlverişli həllini tapırıq.`
                     
        }
    ]
  return (
    <div className="swiper_slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-6/12 "
      >
       
        <SwiperSlide className="h-48">
<Stack direction="row" className="bg-white w-full  ">
{card.map(({ id, name, description }) => (
    <div key={id} className=" flex flex-col justify-center bg-red h-[300px] p-3 ">
      <Image src="/pp.png" alt="Profile" width={50} height={50} className="" />
      <Typography variant="h5">{name}</Typography>
      <Typography sx={{ fontStyle: 'italic', m: 1 }}>
        {description}
      </Typography>
    </div>
  ))}
</Stack>
</SwiperSlide>
  



<SwiperSlide className="bg-blue-500">
<Stack direction="row">
{card.map(({ id, name, description }) => (
  <div key={id} className="bg-red">
      <Image src="/pp.png" alt="Profile" width={100} height={100} />
      <Typography variant="h5">{name}</Typography>
      <Typography sx={{ fontStyle: 'italic', m: 1 }}>
        {description}
      </Typography>
    </div>
  ))}
</Stack>
</SwiperSlide>
<SwiperSlide className="bg-blue-500">
<Stack direction="row">
{card.map(({ id, name, description }) => (
    <div key={id} className="bg-red">
      <Image src="/pp.png" alt="Profile" width={100} height={100} />
      <Typography variant="h5">{name}</Typography>
      <Typography sx={{ fontStyle: 'italic', m: 1 }}>
        {description}
      </Typography>
    </div>
  ))}
</Stack>
</SwiperSlide>
      </Swiper>
    </div>
  );
}
