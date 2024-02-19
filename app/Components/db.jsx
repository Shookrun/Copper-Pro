// components/ImageGallery.tsx
import axios from 'axios';
// import { getData } from './db.json';

import Image from 'next/image';
const url = "http://localhost:3001/myCarts"

const ImageGallery = async () => {
  const {data} = await axios.get(url)

  return (
      <div className='card'>
        {data?.map(({id,title,url}) => (
          <div key={id} className='card flex flex-col'>
           <div className='card bg-red w-[7%]'>
           <Image src={url} alt={title} width={100} height={100} />
           </div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
  );
};

export default ImageGallery;
