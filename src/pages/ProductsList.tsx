import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar";

type ProductsListProps = {
  items: {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
  }[];
};

const ProductsList = ({ items }: ProductsListProps) => {
  return (
    <div>
      <div className="flex m-3 pt-2">
        <h1 className="text-3xl text-center font-sans">Products list</h1>
        <SearchBar />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-full h-auto">
        {items.map((item) => (
          <>
            <li key={item.id}>
              <Card {...item} />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
