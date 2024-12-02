import { Link } from "react-router-dom";


const Logo = () => {
      return (
            <div>
                  <Link to={"/"}>
                        <h1 className="md:text-2xl text-[20px] font-bold text-gray-800 uppercase hover:text-darkOrange relative group overflow-hidden hoverEffect cursor-pointer">
                              Shoppers
                              <span className="absolute bottom-0 left-0 h-[1px] w-full bg-darkOrange  -translate-x-full group-hover:translate-x-0 transition-transform hoverEffect"></span>
                        </h1>
                  </Link>
            </div>
      );
};

export default Logo;