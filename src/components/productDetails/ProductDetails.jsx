import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import Container from "../Container";
import AddToCartButton from "../AddToCartButton";
import PriceContainer from "../PriceContainer";
import { FaStar } from "react-icons/fa6";

const ProductDetails = () => {
      const { id } = useParams();
      const [product, setProduct] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchProduct = async () => {
                  try {
                        const response = await fetch("/product.json");
                        const data = await response.json();
                        const foundProduct = data.find(item => String(item.id) === id);
                        setProduct(foundProduct);
                  } catch (error) {
                        console.error("Error fetching product:", error);
                  } finally {
                        setLoading(false);
                  }
            };
            fetchProduct();
      }, [id]);

      // Loading State
      if (loading) {
            return (
                  <div className="flex items-center justify-center gap-4 lg:py-40 py-10 text-2xl text-gray-700">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                        <p>Loading...</p>
                  </div>
            );
      }

      // Not Found State
      if (!product) {
            return (
                  <p className="lg:text-3xl text-xl text-gray-600 font-medium text-center lg:py-40 py-10">
                        Product not found!
                  </p>
            );
      }

      // Render Product Details
      return (
            <div className="lg:py-10">
                  <Container className="border-b border-gray-200 border-t">
                        <div className="flex flex-col lg:flex-row gap-10 py-6">
                              {/* Product Image */}
                              <div className="lg:w-2/6 w-full">
                                    <img
                                          src={product.image}
                                          className="lg:h-72 lg:w-80 w-56 h-48 rounded items-center mx-auto justify-center text-center"
                                          alt={product.title}
                                    />
                              </div>

                              {/* Product Details */}
                              <div className="lg:w-4/6 mt-2">
                                    <h1 className="lg:text-3xl text-[20px] tracking-wide font-medium text-gray-800">
                                          {product.name}
                                    </h1>
                                    <p className="mt-2 text-gray-700 lg:text-[16px] text-[14px]">
                                          {product.description}
                                    </p>
                                    <div className="flex items-center mt-2  top-0 right-2">
                                          {Array.from({ length: product.rating }, (index) => (
                                                <span key={index} className="text-orange-500">
                                                      <FaStar size={18} />
                                                </span>
                                          ))}
                                    </div>
                                    <p className="flex items-center gap-2 text-gray-600 mt-2">
                                          <IoCheckmarkSharp className="text-green-700" />
                                          In Stock
                                    </p>
                                    <div className="flex items-center gap-10 mt-1">
                                          <h1 className="text-gray-600 text-[14px]">Free Shipping</h1>
                                    </div>
                                    <PriceContainer item={product} />
                                    <AddToCartButton className={"lg:w-[135px] w-[148px] rounded-lg mt-4"} item={product} />
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default ProductDetails;
