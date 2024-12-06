// TODO: Create a responsive header with logo and navigation.
// TODO: Import theme toggle button for dark and light modes.
// TODO: Toggle navigation visibility on small screens with a menu button.
// TODO: Add a "Contact" button for quick access to contact section.

import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/Tarun Mistry.svg";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <header className="fixed top-0 left-0  w-full h-20 flex items-center z-40">
      <div className="max-w-screen-xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="" className="logo">
            <img src={Logo} width={150} height={150} alt="Tarun Mistry" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <div className="fixed item-center space-x-4 md:justify-self-end">
          {/* <ThemeToggle /> */}
          <a
            href="#contact"
            className="btn btn-secondary max-md:hidden md:justify-self-end"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
