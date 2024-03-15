import { FC } from 'react';
import { Stack } from '@mui/material';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';

interface FirstListProps {
  // Props tanımlanabilirse buraya ekleyebilirsiniz
}

const FirstList: FC<FirstListProps> = () => {
  let firstarr: string[] = ["Naviqasiya", "Kataloq", "Yeniliklər", "Çatdırılma", "Bizim haqqımızda", "Əlaqə"];
  let secondarr: string[] = ["Kataloq","Efir yağları üçün","Hidrozollar üçün","Mis qablar","Mis aksesuarları","Fərdi sifariş","Endirimlər və təkliflər"];
  let thirdarr: string[] = ["Əlaqə","Bazhana 8-B, Kiyev,02132 Ukrayna","+38 (096) 990 67 56","a.alambik@gmail.com"];
  
  return (
    <div className="flex justify-center gap-10 w-[100%]">
      <Stack className="text-white mont gap-4">
        {firstarr.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </Stack>
      <Stack className="text-white mont gap-4">
        {secondarr.map((item,index)=>(
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </Stack>
      <Stack className="text-white mont gap-4">
        {thirdarr.map((item,index)=>(
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
        <div className="flex text-2xl ">
          <FaTwitter className="text-white " />
          <FaFacebookF className="text-white" />
          <BiLogoInstagramAlt className="text-white" />
        </div>
      </Stack>
    </div>
  );
}

export default FirstList;
