import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const images = [
  "/card1.png",
  "/card2.png",
  "/card3.png",
  "/card4.png",
  "/card5.png",
  "/card6.png",
];

interface Card {
  id: number;
  title: string;
  img: string;
}

const SectionOne: React.FC = () => {
  const card: Card[] = [
    {
      id: 1,
      title: "EFİR YAĞLARI ÜÇÜN",
      img: images[0],
    },
    {
      id: 2,
      title: "Hidrozollar üçün",
      img: images[1],
    },
    {
      id: 3,
      title: "Mis qablar",
      img: images[2],
    },
    {
      id: 4,
      title: "Mis aksesuarları",
      img: images[3],
    },
    
  ];

  return (
    <div>
      <Container maxWidth="lg">
        <Stack className="  h-[100%]">
        
          <Stack
            direction="row"
            className="flex my-10 justify-start  w-full gap-5 h-[100%]   "
          >
            {card.map(({ id, title, img }) => (
              <Stack
                key={id}
                className="w-[30%] hover:scale-105 cursor-pointer group h-[100px] relative border transition-all duration-100 hover:rounded-lg overflow-hidden group ease-in items-center py-2 bg-cover bg-center bg-no-repeat max-sm: "
                // sx={{backgroundImage:`url(${img})`}}
              >
                <Image alt="Image" src={img} fill className="z-[5]" />
                <div className="absolute top-0 left-0 z-10 opacity-full transition-all duration-300 gradient-custom hover:gradient-custom-hover peer-hover:gradient-custom-hover group-hover:gradient-custom-hover w-full h-full"></div>
                <Typography className="text z-20 peer absolute bottom-4 w-full text-center text-white">
                  {title}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default SectionOne;
