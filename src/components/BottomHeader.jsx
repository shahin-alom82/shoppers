import { useEffect, useState, useRef } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Container from "./Container";
import { navLink, popular } from "./constants";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-2 bg-[#112240] text-white relative">
      <Container className="flex flex-col lg:flex-row lg:items-center lg:gap-32 gap-4">
        {/* Dropdown Trigger */}
        <h1
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 uppercase lg:text-[18px] tracking-wide cursor-pointer"
        >
          <MdOutlineMenu size={25} />
          <span className="font-semibold">Shop By Category</span>
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center lg:gap-4 gap-2">
          {navLink.map((item, index) => (
            <div key={index}>
              <Link to={item?.path}>
                <h1 className="uppercase px-2 py-0.5 text-sm">{item?.title}</h1>
              </Link>
            </div>
          ))}
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute lg:top-[35px] top-[73px] lg:left-32 left-0 w-52 bg-slate-700  mt-2"
          >
            {popular.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                onClick={() => setIsDropdownOpen(false)} // Close dropdown on item click
              >
                <div className="px-4">
                  <h1 className="text-white text-sm hover:bg-[#112240] rounded-md py-2 px-4 mt-2 mb-3 duration-300 cursor-pointer">
                    {item?.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default BottomHeader;
