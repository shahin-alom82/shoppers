import { app, laptop, mobile, play, tavlate } from "../assets";
import Container from "./Container";

const MobileTabletDesign = () => {
      return (
            <Container className={"lg:flex gap-10 mt-14 h-[400px] hidden md:block"}>
                  <div className="ml-28 w-4/6">
                        {/* Tablet Design */}
                        <div className="relative border-gray-800  bg-gray-800 border-[14px] rounded-xl max-w-[301px] md:max-w-[512px] h-[172px] md:h-[294px] flex-shrink-0">
                              {/* Screen Section */}
                              <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                                    <img
                                          src={laptop}
                                          className="dark:hidden h-full w-full rounded-xl"
                                          alt="Tablet Screen"
                                    />
                              </div>

                              <div className="relative bg-gray-800 w-[200px] h-[40px] mt-2 mx-auto rounded-t-full"></div>
                        </div>
                  </div>

                  <div className="mt-8">
                        <h1 className="text-3xl font-semibold uppercase hover:text-orange-600 duration-300 cursor-pointer">Shoppers</h1>
                        <p className="tracking-wide text-gray-800 mt-2">The Shoppers website is tailored for individuals of all ages who value convenience, variety, and quality in online shopping.</p>
                        <div className="flex items-center mt-4">
                              <input className="border border-gray-300 py-3 px-4 outline-none w-80 rounded-l-lg text-gray-500" placeholder="Email Address" type="text" />
                              <button className="bg-orange-600 text-white py-[13px] px-4 rounded-r-lg">Subscribe</button>
                        </div>
                        <div className="flex items-center gap-6 mt-4">
                              <img src={play} alt="img" className="h-10" />
                              <img src={app} alt="img" className="h-10" />
                        </div>
                  </div>
            </Container>
      );
};

export default MobileTabletDesign;
