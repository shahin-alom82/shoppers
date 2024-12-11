import { Link } from "react-router-dom";
import PriceContainer from "../PriceContainer";
import AddToCartButton from "../AddToCartButton";
import { FaStar } from "react-icons/fa6";

const MapProduct = ({item}) => {
      return (
            <div className="mb-10">
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
      );
};

export default MapProduct;