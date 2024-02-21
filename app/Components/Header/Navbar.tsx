'use client'
import React, { useState } from 'react';
import logo from  "@/public/Logo.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  let navBar: string[] = ["Kataloq","Yeniliklər","Çatdırılma","Haqqımızda","Əlaqə"];
  return (
    <div id='nav'>
      <Container maxWidth="lg" className='relative flex flex-col gap-4 max-sm:w-[400px]'>

        <Stack direction="row" className="w-[100%] justify-between">
          <Stack direction="row" className="items-center justify-between transition-all text-white mx-3 gap-3  w-[30%] ">
            <Image
              src={logo}
              width={120}
              height={120}
              alt="logo"
              className="cursor-pointer transition-all hover:scale-110 max-sm:h-[50%]"
            />
            {navBar.map((item, index) => (
              <Typography key={index} variant="body2" className="cursor-pointer mont max-sm:hidden">
                {item}
              </Typography>
            ))}
          </Stack>

          <Stack direction="row" className="transition-all items-center justify-between w-[30%] max-sm:w-[100%]">
            <Stack direction="row" className='gap-2'>
              <div className="bg-white w-[30px] h-[50px] py-1 flex items-end justify-center max-sm:hidden ">
                <FavoriteBorderIcon className="w-5" />
              </div>
              <div className="bg-white w-[30px] h-[50px] py-1 flex items-end justify-center  ">
                <PersonIcon className="w-5" />
              </div>
              <div className="bg-white w-[30px] h-[50px] py-1 flex items-end justify-center  ">
                <ShoppingCartOutlinedIcon className="w-5" />
              </div>
            </Stack>
            <div onClick={toggleModal} className='bg-gradient2 hidden h-8 pr-2 items-center max-sm:flex' >
              <MenuRoundedIcon className=''/>
            </div>
            {modalOpen && (
              <div className="absolute left-0 bottom-0 h-[100%] w-[100%] bg-white  text-red">
                <button onClick={toggleModal}>Bağla</button>
              </div>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default Navbar;
