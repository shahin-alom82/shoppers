
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const SearchInput = () => {
      const [search, setSearch] = useState("")

      return (

            <div className="w-full hidden  md:block">
                  <div  className="flex items-center  border border-gray-400 py-1.5 rounded-full px-2">
                        <input
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Search Product..."
                              className="w-[700px] rounded-l-md outline-none bg-transparent pr-10 pl-10 placeholder:text-sm placeholder:tracking-wide placeholder:text-gray-600 text-sm text-gray-600 tracking-wide relative"
                              type="text"

                        />
                        <button className="bg-lightOrange text-white py-1.5 rounded-full px-4 text-sm tracking-wide">Search</button>
                        <IoMdSearch className=" absolute ml-2 text-lightOrange" size={20} />
                        {
                              search && (
                                    <IoClose onClick={() => setSearch('')} size={18} className="absolute text-gray-500 ml-[670px] hover:text-red-600 cursor-pointer hoverEffect" />
                              )
                        }
                  </div>
            </div>

      );
};

export default SearchInput;


