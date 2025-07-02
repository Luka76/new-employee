import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

type Product = {
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

const Product = () => {
  const { id } = useParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [item, setItem] = useState<Product>();

  useEffect(() => {
    const fetchItem = async () => {
      const url = "https://dummyjson.com/products/";
      try {
        const response = await fetch(`${url}${id}`);
        if (!response.ok) {
          throw new Error(`something went wrong! status: ${response.status}`);
        }
        const json = await response.json();
        setItem(json);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (error || !item) return <div>Nothing found</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white border border-[#ccc] rounded-xl shadow-md p-6 max-w-[600px] w-full">
        <h2 className="text-xl font-semibold mb-4">{item.title}</h2>

        <img
          key={item.id}
          src={item.images[0]}
          alt={item.title}
          className="w-full h-[300px] object-contain rounded-md mb-4"
        />

        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {item.images.map((imgUrl, index) => (
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-lg">
                <img
                  key={index}
                  src={imgUrl}
                  alt={`${item.title} ${index + 1}`}
                  className="w-[100px] h-[100px] object-cover"
                  
                />
              </span>
            ))}
          </div>
          <Link
            to="/products"
            className="border-solid border-2 text-2xl font-bold p-3 rounded-full flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go back
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="mt-5">
            <p>Rating: {item.rating}</p>
            <p>In stock: {item.stock}</p>
            <p>Return policy: {item.returnPolicy}</p>
          </div>
          <span className="text-2xl font-bold shadow-2xl">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
