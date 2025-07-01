import { Card } from '../components/Card'

type ProductsListProps = {
  items:{
    id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  }[]
  
}

const ProductsList = ({items}: ProductsListProps) => {
  return (
    <div>
      <h1>Products list</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-auto h-auto">
        {items.map((item) => (
          <>
            <li key={item.id}>
              <Card {...item} />
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList