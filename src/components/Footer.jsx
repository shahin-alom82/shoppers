import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { footerData } from "./constants";
import Container from "./Container";
 
const Footer = () => {
      return (
            <div className="py-8 bg-bgLight">
                  <div className="border-b border-gray-400">

                        
                        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
                              {
                                    footerData.map((item) => (
                                          <div key={item.id}>
                                                <h1 className="text-xl font-medium hoverEffect text-darkOrange/80 tracking-wide">{item?.title}</h1>
                                                <div className="flex flex-col space-y-3 mt-6">
                                                      {
                                                            item.listItem?.map((list) => list.listData?.map((data) => (
                                                                  <Link key={data} href={"/"} className="hover:text-darkOrange hoverEffect">
                                                                        {data}
                                                                  </Link>
                                                            )))
                                                      }
                                                </div>
                                          </div>
                                    ))
                              }
                        </Container>



                  </div>
                  <Container className="mt-6 flex flex-col md:flex-row md:items-center justify-between">
                        <h1 className="text-gray-700 tracking-wide ">Shoppers™. All Rights Reserved.</h1>
                        <div className="flex items-center gap-4 md:mt-0 mt-4">
                              <span className="text-gray-700 border border-gray-400 py-1 px-1  cursor-pointer items-center justify-center text-center hoverEffect"><FaFacebook size={20} /></span>
                              <span className="text-gray-700 border border-gray-400 py-1 px-1 cursor-pointer items-center justify-center text-center hoverEffect"><FaGithub size={20} /></span>
                              <span className="text-gray-700 border border-gray-400 py-1 px-1 cursor-pointer items-center justify-center text-center hoverEffect"><FaInstagramSquare size={20}/></span>
                              <span className="text-gray-700 border border-gray-400 py-1 px-1 cursor-pointer items-center justify-center text-center hoverEffect"><FaYoutube size={20}/></span>
                              <span className="text-gray-700 border border-gray-400 py-1 px-1 cursor-pointer items-center justify-center text-center hoverEffect"><FaXTwitter size={20}/></span>
                              <span className="text-gray-700 border border-gray-400 py-1 px-1 cursor-pointer items-center justify-center text-center hoverEffect"><FaLinkedin size={20}/></span>
                        </div>
                  </Container>
            </div>
      );
};

export default Footer;