import { Link } from "react-router-dom";
import { FaGithub, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "../../pages/Contact/Contact.css";
import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navoption = (
    <>
      <li className="uppercase p-2 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
        <Link to="/" onClick={toggleMenu}>Home</Link>
      </li>
      <li className="uppercase p-2 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
        <Link to="/about" onClick={toggleMenu}>About</Link>
      </li>
      <li className="uppercase p-2 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
        <Link to="/project" onClick={toggleMenu}>Projects</Link>
      </li>
      <li className="uppercase p-2 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </li>
      <li className="uppercase p-2 text-xl rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
        <a href="https://github.com/khokons" className="" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </li>
      <li className="uppercase p-2 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
        <a href="https://www.linkedin.com/in/khokon26/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>
            }
          </div>

          {
            isMenuOpen && 
            <ul
            tabIndex={0} 
            className="w-[300px] py-4 justify-center items-center menu menu-sm dropdown-content bg-black mt-3 z-[20] rounded-[5px]cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
            {navoption}

          </ul>
          }
            

       
        </div>
        <a className="text-[#C68B59] text-xl uppercase py-4 px-8 border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
          Khokon
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navoption}</ul>
      </div>


      <div className="navbar-end">
          <div className="h-12 w-12 rounded-full flex justify-center items-center hover:border-2 hover:border-[#C68B59]">
          <a href="https://www.facebook.com/khokons26" target="blank">
          <img className="h-full w-full rounded-full"
              alt="profile"
              src="https://i.postimg.cc/hGMcrjDc/khokon.jpg"
            />
          </a>
          </div>
      
      </div>



    </div>
  );
};

export default Navbar;
