import { Container, Typography } from "@mui/material"
import Image from "next/image"
import img from "@/public/Signature.png"
import obj from "@/public/objects.svg"
const SectionOne = () => {
  return (
    <div className="bg-neutral-100 flex  p-10">
      <Container className=" flex">
      <div className="w-[50%] h-[40vh] justify-evenly pt-32 gap-10 flex flex-col ">
        {/* Pages Start */}
        <div className="flex">
        <Typography className="mont">
            Əsas Səhifə/ 
        </Typography>
        <Typography className="mont font-bold">
              Haqqımızda
        </Typography>
        </div>
        {/* Pages End */}
        <Typography variant="h2" className="text ">
            HAQQIMIZDA
        </Typography>
        <span className="bg-gray-400 h-[1px]">‎</span>
        {/* gradient start */}
        <div className="flex   ">
        <span className="bg-clip-text text-7xl text-transparent  bg-gradient-to-r  from-gradient1 to-gradient2">&ldquo;</span>
        <Typography variant="h4" className="italic text-center w-[80%] text-transparent bg-clip-text  bg-gradient-to-r  from-gradient1 to-gradient2 ">
        Biz Misdən Hazırlanmış Hər Şeyi Sevirik 
        </Typography>
        <span className="bg-clip-text text-7xl  text-transparent  bg-gradient-to-r  from-gradient1 to-gradient2">&rdquo;</span>
        </div>
        {/* gradient end */}

        {/* Signature start */}
        <div className="flex  w-48 gap-9 ">
          <Typography variant="h6" className="font-bold mont w-20 bg-clip-text text-transparent  bg-gradient-to-r  from-gradient1 to-gradient2">
            Ivan Ivanov
          </Typography>
          <Image
          src={img}
          width={100}
          height={100}
          alt="signature"
          />
        </div>
        {/* Signature End */}
       </div>
       <div className=" w-[50%]  flex justify-center items-center ">
        <Image
        src={obj}
        width={120}
        height={120}
        alt="Objects"
        className="w-[100%] h-[100%] object-cover"
        />
       </div>
      </Container>
    </div>
  )
}

export default SectionOne