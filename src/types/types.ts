export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  returnPolicy: string;
  stock: number;
  rating: number;
};