import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form action="" className="flex flex-col max-w-[600px] w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#5c71e9] text-gray-300">
            Contact
          </p>
          <p className="text-gray-100 py-4">
            Vous pouvez me contacter directement en m'appelant{" "}
            <span className="font-bold inline border-b-2">034 03 837 14</span>{" "}
            ou bien m'envoyer un email a{" "}
            <span className="font-bold inline border-b-2">
              Andrinirinataf2@gmail.com
            </span>{" "}
            .
          </p>
        </div>
        <input
          className="bg-[#797a7e] p-2 text-white"
          type="text"
          placeholder="Nom"
          name="nom"
        />
        <input
          className="my-4 p-2 bg-[#7a797e] text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#797a7e] p-2 text-white"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#1e693ef8] hover:border-[#1e693ef8] py-3 px-4 my-8 mx-auto flex items-center">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
