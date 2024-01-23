import React from "react";

const A_propos = () => {
  return (
    <div name="a_propos" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#5c71e9]">
              A propos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Bonjour...</p>
          </div>
          <div>
            <p>
              Actuellement au niveau Master II en Génie Logiciel à l’Université
              de l’Institut d’Enseignement Supérieur d’Antsirabe Vakinankaratra
              (IES-AV). Mon expérience m’a permis de m’adapter facilement aux
              différents gens qui m’entoure, je sais me démarquer par mon
              leadership et mon sens de la communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A_propos;
