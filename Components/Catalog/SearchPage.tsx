"use client";

import { Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
interface Product {
  id: number;
  name: string;
  img: string;
}

interface SearchPageProps {
  products: Product[];
}

const SearchPage: React.FC<SearchPageProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container>
        <div className="flex relative items-center">
          <input
            type="text"
            placeholder="Search for a product"
            value={searchTerm}
            onChange={handleSearch}
            className="outline-none  transition-all duration-700 before:content-['Hello_World']"
          />
          <IoSearchOutline />
        </div>
        <div className="flex flex-wrap justify-between gap-14 py-20">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col w-[22vw] h-[50vh] ">
              <Image
                src={product.img}
                width={100}
                height={100}
                alt="card1"
                className="w-[100vw] h-[100%] "
              />
              <div className="flex  justify-between items-center">
                <Typography className="mont w-32">{product.name}</Typography>
                <Typography className="font-bold">55434</Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
