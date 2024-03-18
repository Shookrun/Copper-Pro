import Image from 'next/image'
import React from 'react'
import img from "@/public/SectionFive.svg"
import icon1 from "@/public/icon1.svg"
import icon2 from "@/public/icon2.svg"
import icon3 from "@/public/icon3.svg"
import { Container, Typography } from '@mui/material'
const AboutSectionFive = () => {
  return (
    <div className='bg-white py-28 '>
        <Container className='flex justify-center'>
        <div className=' flex relative w-[38%]'>
            <Image
            src={img}
            alt='Mountain'
            fill
            className=''
            />
        </div>
        <div className=' w-[40%] pl-4 pt-10 gap-4 flex flex-col '>
            <Typography variant='h4' className='text w-[10%]'>
                BİZİM DƏYƏRLƏR
            </Typography>
            <Typography className='mont'>
            İstehsalımız Ukraynada yerləşir, lakin 50-dən çox ölkədən olan müştərilər mağazamızdan alınan mallardan zövq alırlar.
            </Typography>
            <div>
              <div className='flex items-center gap-4'>
                <Image
                src={icon1}
                width={100}
                height={100}
                alt='iconOne'
                className='w-[10%] '
                />
                <Typography>Səmərəlilik</Typography>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-4'>
                <Image
                src={icon2}
                width={100}
                height={100}
                alt='iconOne'
                className='w-[10%] '
                />
                <Typography>Keyfiyyətli məhsul və xidmət</Typography>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-4'>
                <Image
                src={icon3}
                width={100}
                height={100}
                alt='iconOne'
                className='w-[10%] '
                />
                <Typography>Çeviklik</Typography>
              </div>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default AboutSectionFive