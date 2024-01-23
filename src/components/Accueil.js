import React from "react";
import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi";

const Accueil = () => {
  return (
    <div name="accueil" className="w-full h-screen bg-[#0a192f]">
      {/** Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#a3aaa9]">Bonjour mon nom c'est</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Tafita
        </h1>
        <h2 className="text-4xl sm:text-5xl py-4 font-bold text-[#575a66]">
          Je suis dans le monde d'Informatique baser sur le developpement
          d'application web!
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#575a66] hover:border-[#575a66]">
            <Link to="techno" smooth={true} duration={500}>
              Language Informatique
            </Link>

            {/**Annimation icon */}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
