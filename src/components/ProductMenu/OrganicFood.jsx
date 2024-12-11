import { useEffect, useState } from "react";
import Container from "../Container";
import MapProduct from "./MapProduct";

const OrganicFood = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await fetch("/product.json");
                        const data = await response.json();
                        const filterData = data.filter((item) => item.category === "organicfood");
                        setProducts(filterData);
                  } catch (error) {
                        console.error("Error fetching products", error);
                  }
            };

            fetchData();
      }, []);

      return (
            <div className="mb-10">
                  <Container>
                        <h1 className="lg:text-2xl py-4 mt-4 tracking-wide text-gray-700 uppercase font-semibold">Organic Food</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-4 md:gap-8">
                              {products.length > 0 ? (
                                    products.map((item) => <MapProduct item={item} key={item?.id} />)
                              ) : (
                                    <p>No products available in this category.</p>
                              )}
                        </div>
                  </Container>
            </div>
      );
};

export default OrganicFood;