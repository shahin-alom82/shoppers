
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { FaUserLarge } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import BottomHeader from "./BottomHeader";
import { useSelector } from "react-redux";
import LogOut from "./Logout";

const Header = () => {
      const { products } = useSelector((state) => state.shop)
      const token = localStorage.getItem('token')
      return (
            <div className="sticky z-50 top-0 bg-white">
                  <header className="border-b border-gray-300 py-5 ">
                        <Container className="flex items-center justify-between lg:gap-10 gap-2">
                              {/* Logo */}
                              <div>
                                    <Logo />
                              </div>
                              {/* Input Field */}
                              <div>
                                    <SearchInput />
                              </div>
                              {/* Nav Link */}
                              <div className="flex items-center lg:gap-10 gap-2 tracking-wide text-[14px] text-gray-800 font-medium">

                                    <div className="flex items-center gap-3 cursor-pointer">
                                          <Link className="border border-gray-400 py-2 px-2 text-gray-600 rounded-full" to={"/login"}>
                                                <FaUserLarge size={22} />
                                          </Link>
                                          <div>
                                                <h1 className="lg:text-[16px] text-sm">Hello, Guest</h1>
                                                {
                                                      token ? (
                                                            <LogOut />
                                                      ) :
                                                            (
                                                                  <h1 className="lg:text-[14px] text-xs">Login / Register</h1>
                                                            )
                                                }
                                          </div>
                                    </div>

                                    <Link to={"/cart"}>
                                          <div className="relative">

                                                <span className="text-gray-600"><BsCartCheck size={30} /></span>

                                                <span className="absolute bottom-6 left-2.5 text-gray-700">{products?.length}</span>
                                          </div>
                                    </Link>
                              </div>
                              {/* Menu Bar Section */}
                              {/* <div>
                                    <IoMenuOutline size={30} className="inline-flex md:hidden cursor-pointer text-gray-700 hoverEffect" />
                              </div> */}
                        </Container>
                  </header>
                  {/* Bottom Header */}
                  <BottomHeader />
            </div>
      );
};

export default Header;