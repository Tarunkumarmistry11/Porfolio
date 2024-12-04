import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top= lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left= lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width= lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height= lastActiveLink.current.offsetHeight + "px";
  }

  useEffect(initActiveBox, []);

  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
      e.target.classList.add("active");
      lastActiveLink.current = e.target;

      activeBox.current.style.top= e.target.offsetTop + "px";
    activeBox.current.style.left= e.target.offsetLeft + "px";
    activeBox.current.style.width= e.target.offsetWidth + "px";
    activeBox.current.style.height= e.target.offsetHeight + "px";
  }

  const navItems = [
    {
      label: "About",
      link: "#about",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Skills",
      link: "#skills",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#projects",
      className: "nav-link",
    },
    {
      label: "Education",
      link: "#education",
      className: "nav-link",
    },
    {
      label: "Recent",
      link: "#recent",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {
        navItems.map(({ label, link, className, ref }, key) => (
          <a href="{link}" key={key} ref={ref} className={className} onClick={activeCurrentLink}>
            {label}
          </a>
        ))
      }
      <div className="active-box" ref={activeBox} ></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};


export default Navbar;
