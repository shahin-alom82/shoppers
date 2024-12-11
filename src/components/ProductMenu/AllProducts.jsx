import { useEffect, useState } from "react";
import Container from "../Container";
import MapProduct from "./MapProduct";
import { productBannerOne } from "../../assets";

const AllProducts = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
            const getProducts = async () => {
                  try {
                        const response = await fetch('/product.json');
                        const productData = await response.json();
                        setProducts(productData);
                  } catch (error) {
                        console.error("Error fetching products", error);
                  }
            };
            getProducts();
      }, []);

      return (
            <div className="mb-10">
                  <Container>
                        <div className="relative mt-6">
                              <img className="h- w-full" src={productBannerOne} alt="img" />
                              <div className="absolute top-16 left-20 hidden lg:block">
                                    <p className="text-gray-600 tracking-wide">Explore Top Products Today!</p>
                                    <h1 className="tracking-wide lg:text-4xl uppercase text-gray-800 font-semibold mt-4">Find Everything You Need</h1>
                                    <h1 className="tracking-wide lg:text-4xl text-sm uppercase text-gray-800 font-semibold mt-3">in One Place</h1>
                                    <button className="mt-4 border border-gray-100 text-sm py-2 px-4 tracking-wide text-white">Shop Now</button>
                              </div>
                        </div>
                        {/* All Product Section */}
                        <div>
                              <h1 className="tracking-wide text-gray-700 py-6 lg:text-2xl">Browse through the products specialist.</h1>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                                    {
                                          products.map((item) => <MapProduct item={item} key={item?.id} />)
                                    }
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default AllProducts;