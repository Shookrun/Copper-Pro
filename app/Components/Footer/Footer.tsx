import Image from "next/image";
import img from "@/public/Logo.png"
import { Container, Stack, Typography } from "@mui/material";
import ListFirst from "./Firstlist"
export default function Footer () {
   
return (
    <div className="bg-[url('../public/Footer.png')] p-10">
   
       <Container  maxWidth="lg" className=" flex justify-between">
       <Stack className="w-[17%]">
        <Image src={img} alt="logo" width={140} height={140}/>
        <Typography  className="text-white">
        © 2021 “Copper Pro”
Bütün hüquqlar qorunur
        </Typography>
        <Typography className="text-white underline cursor-pointer">
        Gizlilik Siyasəti
        </Typography>
        </Stack>
        <Stack>
          
        <ListFirst/>
        </Stack>
       </Container>
    </div>
)
}