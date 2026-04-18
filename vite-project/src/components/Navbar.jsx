import { useState } from "react";
import {Link} from "react-router-dom"
import logo from "../assets/ProductBankLogoWhite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [count, setCount]=useState(0);
    const [search, setSearch] = useState("");


 const handleClick = () => {
    setCount((i) => i + 1);
    console.log("count", count);
  };

    const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    
    <>

      <div className="bg-orange-500 md:bg-green-500 lg:bg-black px-4 md:px-20 lg:px-10 py-4 sticky top-0 ">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            {/* <h2 className="text-3xl text-white font-bold">ProductBank</h2> */}
          <Link to="/">
            <img
              src={logo}
              alt="ProductBank"
               className="h-10 w-auto max-w-[180px] object-contain"
            />
          </Link>
          </div>

           <div className="flex-1 max-w-md hidden md:block">
            <input
              type="text"
                  value={search}
              onChange={handleSearch}
              placeholder="Search products..."
               className="w-full px-4 py-2 rounded-md bg-white text-gray-900 outline-none text-sm"
            />
            </div>
          <div className="flex items-center gap-4">
            <ul className="flex gap-4">
              <Link to="/">
                <li className="text-white">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-white">About</li>
              </Link>
              <Link to="/contact">
                <li className="text-white">Contact</li>
              </Link>
            </ul>
            <Link to="/login">
              <button
                onClick={handleClick}
                className="text-white border border-white px-4 py-1 rounded-md"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

   </>
  );
};

export default Navbar;