"use client"
import { Container, Typography } from "@mui/material"
import CountUp,{useCountUp} from 'react-countup';

const SectionTwo = () => {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 8000,
      });
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

        <div className="w-[50%]   flex flex-col ">
            {/* <Typography variant="h2" className="text-transparent bg-clip-text font-bold tracking-widest text-9xl bg-[url('../public/forest.webp')] bg-left ">12 346</Typography> */}
            <Typography className="mont font-bold bg-clip-text text-3xl text-transparent  bg-gradient-to-r  from-gradient1 to-gradient2">Müştəri Sayğacı</Typography>
            <CountUp  className="text-transparent bg-clip-text font-bold tracking-widest text-9xl bg-[url('../public/forest.webp')] bg-left "  end={12346} enableScrollSpy />
        </div>
        </Container>
    </div>
  )
}

export default SectionTwo