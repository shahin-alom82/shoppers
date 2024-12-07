import Container from "./Container";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GiReturnArrow } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsGift } from "react-icons/bs";

const BottomBanner = () => {
      return (
            <div className="mt-8">
                  <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-10 lg:gap-0 gap-3">
                              <div className="flex items-center gap-4 lg:border-t lg:border-l lg:border-b border-gray-300 py-4 px-4 w-72">
                                    <HiOutlineRocketLaunch size={40} className="text-lightOrange" />
                                    <div>
                                          <h1 className="text-xl">Free Delivery</h1>
                                          <p className="text-sm text-gray-600 tracking-wide">All orders over 4900 BDT</p>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4 lg:border-t lg:border-l lg:border-b border-gray-300 py-4 px-4 w-72">
                                    <GiReturnArrow size={40} className="text-lightOrange" />
                                    <div>
                                          <h1 className="text-xl">9 Days Return</h1>
                                          <p className="text-sm text-gray-600 tracking-wide">If goods have problems</p>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4 lg:border-t lg:border-l lg:border-b border-gray-300 py-4 px-4 w-72">
                                    <MdPayment size={40} className="text-lightOrange" />
                                    <div>
                                          <h1 className="text-xl">Secure Payment</h1>
                                          <p className="text-sm text-gray-600 tracking-wide">100% secure payment</p>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4 lg:border-t lg:border-l lg:border-b border-gray-300 py-4 px-4 w-72">
                                    <FiMessageSquare size={40} className="text-lightOrange" />
                                    <div>
                                          <h1 className="text-xl">24/7 Support</h1>
                                          <p className="text-sm text-gray-600 tracking-wide">Dedicated support</p>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4 lg:border border-gray-300 py-4 px-4 w-72">
                                    <BsGift size={40} className="text-lightOrange" />
                                    <div>
                                          <h1 className="text-xl">Gift Service</h1>
                                          <p className="text-sm text-gray-600 tracking-wide">Support gift service</p>
                                    </div>
                              </div>
                        </div>
                        {/* <div className="flex flex-col lg:flex-row gap-5">
                                    <img src={bannerimgone} className="h-[460px]  w-3/4" alt="" />
                              <div className="flex flex-col gap-5 w-1/4 mt-12">
                                    <img src={bannerimgtwo} alt="" />
                                    <img src={bannerimgthree} alt="" />
                              </div>
                        </div> */}
                  </Container>
            </div>
      );
};

export default BottomBanner;