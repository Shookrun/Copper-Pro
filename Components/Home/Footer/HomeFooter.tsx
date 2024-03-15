import Image from "next/image";
import img from "@/public/Logo.png";
import { Container, Stack, Typography } from "@mui/material";
import ListFirst from "./HomeFirstlist";
import Link from "next/link";
export default function Footer() {
  return (
    <div id="div" className="bg-[url('../public/Footer.png')] p-10 relative">
      <Container maxWidth="lg" className=" flex justify-between">
        <Stack className="w-[17%] gap-10">
          <Image src={img} alt="logo" width={140} height={140} />
          <Typography className="text-white font-mono">
            © 2021 “Copper Pro” Bütün hüquqlar qorunur
          </Typography>
          <Typography className="text-white underline cursor-pointer">
            Gizlilik Siyasəti
          </Typography>
        </Stack>
        <Stack>
          <ListFirst />
          <Link id="div" href="#nav" className="">
            <div className="bg-red w-[50px] h-[100px] flex justify-center items-center absolute bottom-0 right-28  bg-gradient-to-b from-gradient1 to-gradient2">
              <Typography className="rotate-90 text-white font-bold ">
                Yuxarı
              </Typography>
            </div>
          </Link>
        </Stack>
      </Container>
    </div>
  );
}
