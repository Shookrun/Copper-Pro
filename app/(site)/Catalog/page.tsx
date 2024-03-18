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
  { id: 1, name: 'Çini Qulplu Mis Çaydan', img: "/card1.svg" },
  { id: 2, name: 'Kitaylar', img: "/card2.svg" },
  { id: 3, name: 'Çini Qızılgül Naxışlı Çaydan', img: "/card3.svg" },
  { id: 4, name: 'Çini  Quaş Naxışlı Çaydan', img: "/card1.svg" },
  { id: 5, name: 'Çin Naxışlı Mis Çaydan', img: "/card2.svg" },
  { id: 6, name: 'Çini qulplu mis çaynik', img: "/card3.svg" },
  { id: 7, name: 'Mokoko', img: "/card1.svg" },
  { id: 8, name: 'Çini qulplu mis çaynik', img: "/card2.svg" },
  { id: 9, name: 'Çini qulplu mis çaynik', img: "/card3.svg" },
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
