import { useEffect } from "react";
import { popular } from "../constants";
import Container from "../Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import AddToCartButton from "../AddToCartButton";
import PriceContainer from "../PriceContainer";

const PopularCategory = () => {

      const [category, setCategory] = useState('all');
      const [products, setProducts] = useState([]);
      const [filteredProducts, setFilteredProducts] = useState([]);

      useEffect(() => {
            const getProducts = async () => {
                  try {
                        const response = await fetch('product.json');
                        const productData = await response.json();
                        setProducts(productData);
                        setFilteredProducts(productData);
                  } catch (error) {
                        console.error("Error fetching products", error);
                  }
            };
            getProducts();
      }, []);

      useEffect(() => {
            if (category === 'all') {
                  setFilteredProducts(products);
            } else {
                  const filtered = products.filter((item) =>
                        item.category.toLowerCase() === category.toLowerCase()
                  );
                  setFilteredProducts(filtered);
            }
      }, [category, products]);
      return (
            <div className="py-10">
                  <Container>
                        <h1 className="lg:text-2xl tracking-wide text-xl">Popular Categories</h1>
                        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-8 gap-5 mt-10">
                              {
                                    popular.map((item, index) => (
                                          <button key={index} onClick={() => setCategory(item.path)} className={`border border-gray-300 hover:border-lightOrange duration-300 cursor-pointer px-2 py-1 ${category === item?.path ? 'border-lightOrange' : ""}`}>
                                                <img src={item?.img} alt="img" className="" />
                                                <h1 className="text-center mt-2 text-gray-700 mb-1 hover:text-blue-600">{item?.title}</h1>
                                          </button>
                                    ))
                              }
                        </div>
                        <h1 className="text-sm md:text-2xl tracking-wide text-gray-700 text-center lg:text-left mt-6">
                              Browse through the products specialist.
                        </h1>
                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-4 md:gap-8">
                              {
                                    filteredProducts.map((item) =>
                                          <div key={item?.id}>
                                                <div className="border-t border-l border-r border-gray-300 relative">
                                                      <Link to={`/details/${item.id}`}>
                                                            <img className="md:h-56 items-center justify-center mx-auto py-3 hover:scale-110 duration-300 " src={item?.image} alt="" />
                                                      </Link>
                                                      <div className="py-2 px-4 ">
                                                            <h1 className="md:text-xl text-sm tracking-wide h-8">{item?.name.slice(0, 20)}</h1>
                                                            <div>
                                                                  <PriceContainer className="mt-2" item={item} />
                                                                  {/* <PriceFormate  amount={item?.price} /> */}
                                                            </div>
                                                      </div>
                                                      <div className="flex items-center mt-2 absolute top-0 right-2">
                                                            {Array.from({ length: item.rating }, (index) => (
                                                                  <span key={index} className="text-orange-500">
                                                                        <FaStar size={18} />
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                                <AddToCartButton item={item} />
                                          </div>
                                    )
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default PopularCategory;