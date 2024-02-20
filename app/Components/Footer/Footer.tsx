import Image from "next/image";
import img from "@/public/Logo.png"
import { Stack, Typography } from "@mui/material";
import ListFirst from "./Firstlist"
export default function Footer () {
   
return (
    <div className="bg-[url('../public/Footer.png')]">

        <Stack className="bg-red w-[17%]">
        <Image src={img} alt="logo" width={140} height={140}/>
        <Typography >
        © 2021 “Copper Pro”
Bütün hüquqlar qorunur
        </Typography>
        <Typography className="underline cursor-pointer">
        Gizlilik Siyasəti
        </Typography>
        </Stack>
        <Stack>

        <ListFirst/>
        </Stack>
    </div>
)
}