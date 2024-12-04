
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="" className="logo">
            <img src="#" width={40} height={40} alt="Tarun Mistry" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">{navOpen ? "close" : "menu"}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;