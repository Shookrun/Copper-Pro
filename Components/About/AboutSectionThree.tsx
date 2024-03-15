import { Typography } from "@mui/material";

const SectionThree = () => {
  return (
    <div className="bg-[url('../public/SectionThree.png')] flex  bg-cover bg-no-repeat bg-black">
      <div className=" flex items-start justify-center px-24 pt-20    h-[53vh] w-36 ">
        <Typography variant="h1" className=" -rotate-90  text text-white">
          COPPER PRO
        </Typography>
      </div>

      <div className=" flex flex-col py-6 pl-20 w-[65vw]">
        <div className=" flex justify-center">
          <Typography variant="h4" className="text text-white">
            BİZİM TARİXİMİZ
          </Typography>
        </div>

        <div className="flex">
          <Typography className="text-white mont font-light tracking-wider leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio
            inventore veniam alias adipisci voluptates! Ut adipisci eveniet sed
            saepe voluptatum enim voluptatibus amet error, officiis perferendis
            quod perspiciatis ab. Recusandae neque explicabo nemo perferendis
            molestias facere, a quo tempore, vitae nihil unde iste quam
            praesentium nisi fugiat odit totam aperiam pariatur qui iusto velit
            aut autem itaque earum! Commodi? Molestiae vitae fugit officia nisi
            quasi quo commodi error modi natus? 
          </Typography>

          <Typography className="text-white mont font-light leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio
            inventore veniam alias adipisci voluptates! Ut adipisci eveniet sed
            saepe voluptatum enim voluptatibus amet error, officiis perferendis
            quod perspiciatis ab. Recusandae neque explicabo nemo perferendis
            molestias facere, a quo tempore, vitae nihil unde iste quam
            praesentium nisi fugiat odit totam aperiam pariatur qui iusto velit
            aut autem itaque earum! Commodi? Molestiae vitae fugit officia nisi
            quasi quo commodi error modi natus? 
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
