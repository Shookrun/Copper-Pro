import Container from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import "@/app/style/style.css";
const images = [
  "/card1.png",
  "/card2.png",
  "/card3.png",
  "/card4.png",
  "/card5.png",
  "/card6.png",
];

const SectionOne = () => {
  let card = [
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
    {
      id: 5,
      title: "FƏrdi sifariş",
      img: images[4],
    },
    {
      id: 6,
      title: "EndirimlƏr vƏ tƏkliflƏr",
      img: images[5],
    },
  ];
  return (
    <div>
      <Container>
        <Stack className=" items-center   h-[100%]">
          <Typography variant="h4" className="text">
            BİZİM MƏHSULLAR
          </Typography>
          <Stack
            direction="row"
            className="cards w-full gap-5 h-[900px] items-center bg-white"
          >
            {card.map(({ id, title, img }) => (
              <Stack
                key={id}
                className="w-[80%] hover:scale-105 cursor-pointer group h-[80%] relative border  transition-all duration-100 hover:rounded-lg overflow-hidden group ease-in items-center py-2 bg-cover bg-no-repeat max-sm: "
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
