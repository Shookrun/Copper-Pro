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
      img: "/News.svg",
      description:
        "Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....",
    },
    {
      id: 2,
      title: "Yuxunu yaxşılaşdırmaq üçün efir yağları",
      img: "/News.svg",
      description:
        "Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....",
    },
  ];
  return (
    <div className="flex  w-[100%] gap-10 py-28 ">
      {arr.map(({ id, title, img,description }) => (
        <div key={id} className="relative bg-red w-[35vw] h-[45vh]">
        <div className="bg-blue-500 inset-0 absolute w-full h-[25vh]">
        <Image
        src={img}
        alt="Photo"
        width={100}
        height={100}
        className="w-full h-full object-cover"
        />

        <div>
            
        </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSectionTwo;
