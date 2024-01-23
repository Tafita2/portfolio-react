import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../assets/Drian(1).png";

const Navbar = () => {
  {
    /** Fonction pour le style de menu en mode mobile */
  }
  const [nav, setNav] = useState(false);
  const click = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[130px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} style={{ width: "120px" }} />
      </div>
      {/**Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="accueil" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="a_propos" smooth={true} duration={500}>
            A_propos
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/**Style de menu en petite taille */}
      <div onClick={click} className="md:hidden z-10">
        {!nav ? <FaBars size="25px" /> : <FaTimes color="red" size="30px" />}
      </div>

      {/**Style Menu en mode mobile avec animation scroll des liens */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={click} to="accueil" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={click} to="a_propos" smooth={true} duration={500}>
            A_propos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={click} to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={click} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/**Icon */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/tafitasoa-andrinirina-34b224268/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Tafita2"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#162925]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Personnalite
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
