import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useState, type ChangeEvent } from "react";
import ReactPaginate from "react-paginate";
import type {  Product } from "../types/types";
import { useProducts } from "../hooks/useProducts";

const ProductsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const {items, loading, error} = useProducts();

  const pageCount = Math.ceil(items.length / itemsPerPage);

  function handleSearch(word: string) {
    setSearchTerm(word);
  }

  function handlePageChange(selectedPage: { selected: number }) {
    setCurrentPage(selectedPage.selected);
  }

  function handleItemsNumberChange(event: ChangeEvent<HTMLSelectElement>) {
    setItemsPerPage(parseInt(event.target.value, 10));
  }

  const filteredItems = items.filter((item: Product) => {
    if (searchTerm === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(searchTerm);
    }
  });

  const currentItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const pageCssClass =
    "px-4 py-2 bg-gray-200 border rounded-lg text-gray-700 hover:bg-blue-300 transition-colors duration-150";

  return (
    <div className="relative w-5/6 m-auto">
      <div className="flex m-3 pt-2">
        <h1 className="text-3xl text-center font-sans max-sm:hidden">
          Products list
        </h1>
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-row justify-center items-center gap-2 mr-5">
          <p className="text-xl max-sm:hidden ">Items:</p>
          <select
            name="pageItems"
            id="pageItems"
            className="px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleItemsNumberChange}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="21">21</option>
          </select>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <p className="text-lg">Loading products...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-32">
          <p className="text-lg">Something went wrong...</p>
        </div>
      )}

      {!loading && !error && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center w-full h-auto">
          {currentItems.length > 0 ? (
            currentItems.map((item: Product) => (
              <>
                <li key={item.id}>
                  <Card {...item} />
                </li>
              </>
            ))
          ) : (
            <div className="flex col-span-full justify-center items-center h-32">
              <p className="text-lg text-gray-500">
                {searchTerm
                  ? `No products matching ${searchTerm}`
                  : "No products available"}
              </p>
            </div>
          )}
        </ul>
      )}
      <div className="flex justify-center items-center mb-4 mt-4 ">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="flex space-x-2"
          activeClassName="bg-blue-500 text-white font-bold"
          previousClassName={pageCssClass}
          nextClassName={pageCssClass}
          pageClassName={pageCssClass}
          disabledClassName="cursor-not-allowed bg-gray-300 text-gray-500"
        />
        
      </div>
    </div>
  );
};

export default ProductsList;
