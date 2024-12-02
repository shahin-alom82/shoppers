import { MdOutlineMenu } from "react-icons/md";
import Container from "./Container";
import { navLink } from "./constants";
import { Link } from "react-router-dom";
const BottomHeader = () => {
      return (
            <div className="py-2 bg-[#112240] text-white">
                  <Container className={"flex flex-col lg:flex-row lg:items-center lg:gap-32 gap-4"}>
                        <h1 className="flex items-center gap-2 uppercase lg:text-[18px] tracking-wide"><MdOutlineMenu size={25} /> <span className="font-semibold">Shop By Category</span></h1>
                        <div className="flex items-center gap-4">
                              {
                                    navLink.map((item, index) => (
                                          <div key={index}>
                                                <Link to={item?.path}>
                                                      <h1 className="uppercase px-2 py-0.5 text-sm">{item?.title}</h1>
                                                </Link>
                                          </div>
                                    ))
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default BottomHeader;