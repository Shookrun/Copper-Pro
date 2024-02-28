import React from 'react';
import { Stack, Typography } from '@mui/material';

interface BannerProps {

}

const Banner: React.FC<BannerProps> = () => {
    return (
        <div className="bg-[url('../public/Banner.png')] flex justify-between bg-cover py-10 ">
            <Stack className='gap-14  w-[30%]  items-end justify-end '>
                <div className=' flex flex-col gap-5'>
                    <Typography className='text text-white text-[100px] tracking-widest'>
                        1+1=3
                    </Typography>
                    <Typography variant='h6' className='w-96 text-white'>
                        İki məhsul sifariş edin, üçüncüsü pulsuz əldə edin
                    </Typography>
                    <Stack className="text-white cursor-pointer w-[75%] text-center h-10 items-center justify-center transition-all bg-gradient-to-r from-gradient1 to-gradient2 hover:scale-95 max-sm:w-40">
                        <Typography variant="subtitle1">Kataloqa keç  </Typography>
                    </Stack>
                </div>
            </Stack>
        </div>
    )
}

export default Banner;
