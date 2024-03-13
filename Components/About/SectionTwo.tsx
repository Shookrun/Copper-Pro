"use client"
import { Container, Typography } from "@mui/material"
import CountUp from 'react-countup';

const SectionTwo = () => {
  return (
    <div className="bg-white flex p-24">
        <Container className="flex">
        <div className="flex flex-col w-[50%] gap-4">
            <Typography variant="h4" className="text">
                MÜŞTƏRİLƏRİMİZ
            </Typography>
            <Typography className="mont w-96">
            Biz özümüzdən tələb edirik ki, hər gün müştərilərimiz üçün daha yaxşı olaq və onların hər biri üçün ən yaxşı həllər tapaq.
            </Typography>
        </div>

        <div className="w-[50%]  flex justify-center items-center ">
            {/* <Typography variant="h2" className="text-transparent bg-clip-text font-bold tracking-widest text-9xl bg-[url('../public/forest.webp')] bg-left ">12 346</Typography> */}
            <CountUp duration={20} className="text-transparent bg-clip-text font-bold tracking-widest text-9xl bg-[url('../public/forest.webp')] bg-left "  end={1200} />
        </div>
        </Container>
    </div>
  )
}

export default SectionTwo