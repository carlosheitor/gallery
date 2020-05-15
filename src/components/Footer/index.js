import React from "react";

const Footer = ({ text = "Site Desenvolvido por Carlos Heitor" }) => {
  return (
    <div className="border-t mt-6 max-w-4xl mx-auto p-6">
      <p className="text-center font-bold">{text}</p>
    </div>
  );
};

export default Footer;
