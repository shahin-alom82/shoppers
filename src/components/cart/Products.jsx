import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import PriceContainer from "../PriceContainer";
import AddToCartButton from "../AddToCartButton";
import PriceFormate from "../PriceFormate";
import { productDelete } from "../redux/shopSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



const Products = ({ products }) => {

      const dispatch = useDispatch()

      return (
            <div className="w-full grid grid-cols-1 md:grid-cols-5 border border-gray-300 gap-4 py-4 px-4">
                  {/* Image and Info Section */}
                  <div className="flex flex-col md:flex-row col-span-1 md:col-span-2 items-center gap-4">
                        <div>
                              <RiCloseLine
                                    onClick={() => {
                                          dispatch(productDelete(products?.id)),
                                                toast.success(`${products?.name.slice(0, 10)} is deleted successfully!`);
                                    }}
                                    size={25}
                                    className="text-gray-700 hover:text-red-600 duration-300 cursor-pointer"
                              />
                        </div>
                        <Link to={`/details/${products.id}`}>
                              <img
                                    className="h-32 w-36 hover:scale-110 duration-300 col-span-2 object-cover"
                                    src={products?.image}
                                    alt={products?.name || "Product Image"}
                              />
                        </Link>
                        <h1 className="text-sm md:text-lg text-center md:text-left">
                              {products?.name.slice(0, 28)}
                        </h1>
                  </div>
                  {/* Price, Cart, and Total Section */}
                  <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex w-full md:w-1/3 items-center justify-center lg:items-start lg:justify-start">
                              <PriceContainer item={products} />
                        </div>
                        <div className="flex w-full md:w-1/3 items-center justify-center lg:items-start lg:justify-start">
                              <AddToCartButton
                                    className="lg:w-[135px] w-full md:w-[148px] rounded-lg mt-1"
                                    item={products}
                              />
                        </div>
                        <div className="flex w-full md:w-1/3 items-center justify-center lg:items-start lg:justify-start">
                              <PriceFormate amount={products?.price * products.quantity} />
                        </div>
                  </div>
            </div>



      );
};

export default Products;