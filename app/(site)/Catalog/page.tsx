import React from 'react';
import SearchPage from '@/Components/Catalog/SearchPage'; // SearchPage bileşeninden Product türünü içe aktarıyoruz
import Section1 from '@/Components/Catalog/CatalogSectionOne';

// Ürünlerin türü
type Product = {
  id: number;
  name: string;
  img: string;
}

// Ürünler dizisinin türü
const products: Product[] = [
  { id: 1, name: 'Çini qulplu mis çaynik', img: "/card1.png" },
  { id: 2, name: 'Çini qulplu mis çaynik', img: "/card2.png" },
  { id: 3, name: 'Çini qulplu mis çaynik', img: "/card3.png" },
  { id: 4, name: 'Çini qulplu mis çaynik', img: "/card4.png" },
  { id: 5, name: 'Çini qulplu mis çaynik', img: "/card5.png" },
  { id: 6, name: 'Çini qulplu mis çaynik', img: "/card6.png" },
];

// Ana sayfa bileşeni
const HomePage: React.FC = () => {
  return (
    <div>
      <Section1 />
      <SearchPage products={products} />
    </div>
  );
};

export default HomePage;
