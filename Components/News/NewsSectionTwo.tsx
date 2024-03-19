import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface arr {
  id: number;
  img: string;
  title: string;
  description: string;
}

const NewsSectionTwo = () => {
  let arr: arr[] = [
    {
      id: 1,
      title: "Yuxunu yaxşılaşdırmaq üçün efir yağları",
      img: "/News.png",
      description:
        "Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....",
    },
    {
      id: 2,
      title: "Yuxunu yaxşılaşdırmaq üçün efir yağları",
      img: "/News.png",
      description:
        "Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....",
    },
  ];
  return (
    <div className="flex  w-[100%] gap-10 py-28 ">
      {arr.map(({ id, title, img,description }) => (
        <div
          key={id}
          className="w-[50%] flex flex-col bg-red hover:scale-105 cursor-pointer group h-[20vh] relative border transition-all duration-100 hover:rounded-lg overflow-hidden group ease-in items-center py-2 bg-cover bg-center bg-no-repeat max-sm: "
          // sx={{backgroundImage:`url(${img})`}}
        >
          <Image alt="Image" src={img} fill className="z-[5] object-cover" />
          <div className="absolute top-0 left-0 z-10 opacity-full transition-all duration-300 gradient-custom hover:gradient-custom-hover peer-hover:gradient-custom-hover group-hover:gradient-custom-hover w-full h-full"></div>
          <Typography className="mont z-20 peer absolute right-0  flex bottom-4 w-full text-center text-white">
            {title}
          </Typography>
          <Typography>
            salam
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default NewsSectionTwo;
