import { Typography } from "@mui/material";
import Image from "next/image";
import img from "@/public/map.svg"
const SectionFour = () => {
  return (
    <div className=" flex items-center bg-[url('../public/fourBg.png')] bg-neutral-100">
      <div className=" w-[20vw] ml-20 flex flex-col justify-between h-[25vh]">
        <Typography variant="h3" className="text">MƏKANLARIMIZ</Typography>
        <Typography className="mont">
          İstehsalımız Ukraynada yerləşir, lakin 50-dən çox ölkədən olan
          müştərilər mağazamızdan alınan mallardan zövq alırlar.
        </Typography>
      </div>

      <div className=" flex justify-end pr-10 items-center h-[100vh] w-[100vw]">
        <Image
        src={img}
        width={100}
        height={100}
        alt="map"
        className="h-[70vh] w-[70vw] object-cover"
        />
      </div>
    </div>
  );
};

export default SectionFour;
