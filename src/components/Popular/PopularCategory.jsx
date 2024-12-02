import { categoryone } from "../../assets";
import { popular } from "../constants";
import Container from "../Container";


const PopularCategory = () => {
      return (
            <div className="py-10">
                  <Container>
                        <h1 className="lg:text-2xl tracking-wide text-xl">Popular Categories</h1>
                        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-7 gap-5 mt-10">
                              {
                                    popular.map((item, index) => (
                                          <div key={index} className="border border-gray-300 hover:border-lightOrange duration-300 cursor-pointer px-2 py-1">
                                                <img src={item?.img} alt="img" className=""/>
                                                <h1 className="text-center mt-2 text-gray-700 mb-1 hover:text-blue-600">{item?.title}</h1>
                                          </div>
                                    ))
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default PopularCategory;