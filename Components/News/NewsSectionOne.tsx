'use client'
import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
const NewsSectionOne = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div>
        <div className='flex'>
        <Typography className='mont'>
            Əsas Səhifə/
        </Typography>
        <Typography className='mont font-bold'>
            Yeniliklər
        </Typography>
        </div>
        <Typography variant='h3' className='text'>
            YENİLİKLƏR
        </Typography>
        
    </div>
  )
}

export default NewsSectionOne