import { Stack, Typography } from '@mui/material';
import React from 'react';
import "@/app/style/style.css"

export default function Banner () {
return (
    <div className="bg-[url('../public/Banner.png')] flex justify-between bg-cover ">
      <Stack className='gap-14  w-[30%]  items-end justify-end '>
      <div>
      <Typography className='text text-white text-[100px] tracking-widest'>
        1+1=3
      </Typography>
      <Typography variant='h6' className='w-72 text-white'>
      İki məhsul sifariş edin, üçüncüsü pulsuz əldə edin
      </Typography>
      <Stack className="text-white cursor-pointer w-[84%] text-center h-10 items-center justify-center transition-all bg-gradient-to-r from-gradient1 to-gradient2 hover:scale-95 max-sm:w-40">
            <Typography variant="subtitle1">Kataloqa keç  </Typography>
          </Stack>
      </div>
      </Stack>
    </div>
)
}