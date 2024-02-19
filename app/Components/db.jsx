// components/ImageGallery.tsx
import { Typography } from '@mui/material';
import axios from 'axios';
// import { getData } from './db.json';

import Image from 'next/image';
const url = "http://localhost:3001/myCarts"

const ImageGallery = async () => {
  const {data} = await axios.get(url)

  return (
      <div className='card flex flex-wrap justify-center '>
        {data?.map(({id,title,url,content}) => (
          <div key={id} className='card flex flex-col w-[22%] bg-blue-500'>
           <div className='card gbox bg-red w-[20%]'>
           <Image src={url} alt={title} width={100} height={100} />
           </div>
            <h3>{title}</h3>
            <Typography>
              {content}
            </Typography>
          </div>
        ))}
      </div>
  );
};

export default ImageGallery;
