import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import PriceFormate from "./PriceFormate";

const SearchInput = () => {
      const [search, setSearch] = useState("");
      const [products, setProducts] = useState([]);
      const [filterData, setFilterData] = useState([]);

      useEffect(() => {
            const getProducts = async () => {
                  try {
                        const res = await fetch("/product.json");
                        const Productdata = await res.json();
                        setProducts(Productdata);
                  } catch (error) {
                        console.log("Data Not Found");
                  }
            };
            getProducts();
      }, []);

      useEffect(() => {
            const filtered = products.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilterData(filtered);
      }, [search, products]);

      return (
            <div className="w-full hidden md:block">
                  <div className="relative flex items-center border border-gray-400 py-1.5 rounded-full px-2">
                        <input
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Search Product..."
                              className="w-[700px] rounded-l-md outline-none bg-transparent pr-10 pl-10 placeholder:text-sm placeholder:tracking-wide placeholder:text-gray-600 text-sm text-gray-600 tracking-wide"
                              type="text"
                        />
                        <button className="bg-lightOrange text-white py-1.5 rounded-full px-4 text-sm tracking-wide">
                              Search
                        </button>
                        <IoMdSearch className="absolute left-3 text-lightOrange" size={20} />
                        {search && (
                              <IoClose
                                    onClick={() => setSearch("")}
                                    size={18}
                                    className="absolute right-[95px] text-gray-500 hover:text-red-600 cursor-pointer"
                              />
                        )}

                        {/* Dropdown */}
                        {search && filterData.length > 0 && (
                              <div className="absolute top-full left-0 w-full bg-white shadow-lg  shadow-gray-300 rounded-md mt-2 max-h-60 overflow-auto z-10">
                                    {filterData.map((item) => (
                                          <Link
                                                key={item.id}
                                                onClick={() => setSearch("")}
                                                to={`/details/${item.id}`}
                                          >
                                                <div className="p-2 cursor-pointer flex items-center space-x-5 transition duration-200">
                                                      <img
                                                            className="w-14 h-16 py-2 border border-gray-300 rounded object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                                                            src={item.image}
                                                            alt={item.name}
                                                      />
                                                      <div>
                                                            <h1 className="text-[16px] font-medium text-gray-600">
                                                                  {item.name}
                                                            </h1>
                                                            <h1 className="text-sm mt-1 font-medium text-gray-600">
                                                                  
                                                                  <span className="font-medium text-green-600">
                                                                        <PriceFormate amount={item?.price} />
                                                                  </span>
                                                            </h1>
                                                      </div>
                                                </div>
                                          </Link>
                                    ))}
                              </div>
                        )}

                        {search && filterData.length === 0 && (
                              <div className="absolute top-full left-0 w-full bg-white/100 rounded-md mt-[23px] z-10">
                                    <div className="p-2 text-gray-500">Product Not Found</div>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default SearchInput;
