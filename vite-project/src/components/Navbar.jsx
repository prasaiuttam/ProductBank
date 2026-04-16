import { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [count, setCount]=useState(0);


 const handleClick = () => {
    setCount((i) => i + 1);
    console.log("count", count);
  };
  return (
    
    <>

      <div className="bg-orange-500 md:bg-green-500 lg:bg-black px-4 md:px-20 lg:px-10 py-4 sticky top-0 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl text-white font-bold">ProductBank</h2>
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