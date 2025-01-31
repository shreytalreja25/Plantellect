import React from "react";

const Footer = () => {
  return (
    <footer className="bg-success text-white text-center py-3 mt-auto fixed-bottom">
      <p className="mb-0">&copy; {new Date().getFullYear()} Plantellect. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
