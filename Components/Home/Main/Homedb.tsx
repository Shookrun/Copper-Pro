// components/ImageGallery.tsx
import { Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import Image from 'next/image';
import { FC } from 'react';
// import { getData } from './db.json';

interface CartItem {
  id: string;
  title: string;
  url: string;
  content: string;
  subtitle: string;
}

const url = "http://localhost:3001/myCarts";

const ImageGallery: FC = async () => {
  const response: AxiosResponse<CartItem[]> = await axios.get(url);
  const data: CartItem[] = response.data;

  return (
    <div className='my-10 flex flex-wrap gap-10 p-15 justify-center'>
      {data?.map(({ id, title, url, content, subtitle }) => (
        <div key={id} className='flex gap-2 flex-col w-[22%]'>
          <div className=' gbox bg-red w-[16%] p-1'>
            <Image src={url} alt={title} width={100} height={100} />
          </div>
          <Typography variant='subtitle1' className='mont font-bold'>{title}</Typography>
          <Typography className='mont'>
            {content}
          </Typography>
          <Typography>
            {subtitle}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
