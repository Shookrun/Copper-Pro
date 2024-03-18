import Image from 'next/image'
import React from 'react'
import img from "@/public/SectionFive.svg"
import icon1 from "@/public/icon1.svg"
import { Container, Typography } from '@mui/material'
const AboutSectionFive = () => {
  return (
    <div className='bg-white py-28 '>
        <Container className='flex'>
        <div className=' flex relative h-[72vh] w-[50%]'>
            <Image
            src={img}
            alt='Mountain'
            fill
            className=''
            />
        </div>
        <div className='bg-red w-[40%] pl-4 pt-10 flex flex-col h-[72vh]'>
            <Typography variant='h4' className='text w-[10%]'>
                BİZİM DƏYƏRLƏR
            </Typography>
            <Typography className='mont'>
            İstehsalımız Ukraynada yerləşir, lakin 50-dən çox ölkədən olan müştərilər mağazamızdan alınan mallardan zövq alırlar.
            </Typography>
            <div>
              <div>
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
        </div>
        </Container>
    </div>
  )
}

export default AboutSectionFive