import Image from 'next/image'
import React from 'react'
import img from "@/public/SectionFive.svg"
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
        <div className='bg-red w-[40%] flex flex-col h-[72vh]'>
            <Typography>
                
            </Typography>
        </div>
        </Container>
    </div>
  )
}

export default AboutSectionFive