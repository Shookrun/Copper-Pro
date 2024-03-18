'use client'

import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
}

interface SearchPageProps {
  products: Product[];
}

const SearchPage: React.FC<SearchPageProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products?.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Container>
      <div className='flex justify-center gap-10'>
        {filteredProducts.map(product => (
          <div key={product.id} className='flex flex-col bg-red w-[50vw] '>
            <Image
            src={product.img}
            width={100}
            height={100}
            alt="card1"
            className='w-[100vw] '
            />
            <Typography className='mont'>
            {product.name}
            </Typography>
            </div>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default SearchPage;
