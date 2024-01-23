import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#5c71e9]">
              Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold px-4">
            <p>Concernant mon petit Experience ...</p>
          </div>
          <div className="sm:text-left font-bold">
            <li>
              <h1>Octobre 2022 – Décembre 2022 :</h1> Stagiaire Back Office au
              niveau de l’Accès Banque Antsirabe
            </li>
            <li>
              <h1>Novembre 2021 :</h1> Participant à une Porte Ouverte organisé
              par la Mention Automatisme et Informatique à Antananarivo
            </li>{" "}
            <li>
              <h1>Mai 2018 – Aout 2018 :</h1>{" "}
              <h1>
                Participant à la Recensement Général de la Population et
                d’Habitation en Mai 2018 :
              </h1>
              <p>✓ Identité du poste: Agent recenseur</p>
              <p>✓ Profil du poste: Agent de terrain</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
