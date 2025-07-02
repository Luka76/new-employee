import { useNavigate } from "react-router";

interface CardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export const Card = ({ id, title, description, price, images }: CardProps) => {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/products/${id}`);
  }

  return (
    <div className="rounded-sm shadow-2xl p-2 hover:cursor-pointer h-auto hover:scale-102 transform transition-transform duration-200">
      <h1
        onClick={handleNavigation}
        className="text-xl font-semibold cursor-pointer hover:underline m-3"
      >
        {title}
      </h1>
      <div>
        <img
          key={id}
          src={images[0]}
          onClick={handleNavigation}
          className="w-full h-48 object-contain rounded-xl cursor-pointer"
        />
      </div>
      <div className="flex justify-between w-auto">
        <p className="m-1.5 ">{description}</p>
        <h2 className="m-1.5 font-bold">${price}</h2>
      </div>
    </div>
  );
};
