"use client";
import React, { useState } from "react";
import logo from "@/public/Logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  let navBar: any = [
    { title: "Kataloq", to: "/Catalog" },
    { title: "Yeniliklər", to: "/News" },
    { title: "Çatdırılma", to: "/Delivery" },
    { title: "Haqqımızda", to: "/About" },
    { title: "Əlaqə", to: "/Contact" },
  ];
  return (
    <div id="nav" className="bg-[url('../public/Footer.png')] h-28 flex">
      <Container
        maxWidth="lg"
        className="relative flex flex-col gap-4 max-sm:w-[400px]"
      >
        <Stack direction="row" className="w-[100%] justify-between">
          <Stack
            direction="row"
            className="items-end justify-between  transition-all text-white mx-3 gap-3 h-20  w-[50%] "
          >
            <Link href={"/"}>
              <Image
                src={logo}
                width={120}
                height={120}
                alt="logo"
                className="cursor-pointer transition-all hover:scale-110 max-sm:h-[50%]"
              />
            </Link>
            {navBar.map(({ to, title }: { to: any; title: any }) => (
              <Link key={to} href={to}>
                <Typography
                  variant="body2"
                  className="group transition-all duration-200 bg-clip-text block cursor-pointer mont max-sm:hidden hover:bg-gradient-to-r from-yellow-700 to-gradient2 hover:text-transparent hover:underline"
                >
                  {title}
                </Typography>
              </Link>
            ))}

            <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"></span>
          </Stack>

          <Stack
            direction="row"
            className="transition-all items-start  justify-between w-[30%] max-sm:w-[100%]"
          >
            <Stack direction="row" className="gap-2">
              <div className="bg-white w-[30px] h-[50px] py-1 flex items-end justify-center max-sm:hidden ">
                <FavoriteBorderIcon className="w-5" />
              </div>
              <div className="bg-white w-[30px] h-[50px] py-1 flex items-end justify-center max-sm:ml-28  ">
                <PersonIcon className="w-5" />
              </div>
              <div className="bg-white w-[30px] h-[50px] py-1 flex items-end justify-center  ">
                <ShoppingCartOutlinedIcon className="w-5" />
              </div>
            </Stack>
            <div
              onClick={toggleModal}
              className="bg-gradient2 hidden h-8 pr-2 items-center max-sm:flex"
            >
              <MenuRoundedIcon className="" />
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
};

export default Navbar;
