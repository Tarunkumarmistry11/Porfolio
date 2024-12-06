// TODO: Create a navbar that highlights the active link and adjusts the active box position.
// TODO: Track the last active link using a ref and update the active box on link click.
// TODO: Ensure the active box position adjusts dynamically on window resize.
// TODO: Handle click events to update the active link styling and active box position.


import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef();

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      const link = lastActiveLink.current;
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = link;
        // lastActiveLink.current;
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `${offsetLeft}px`;
      activeBox.current.style.width = `${offsetWidth}px`;
      activeBox.current.style.height = `${offsetHeight}px`;

      console.log('Active Box Position:', { offsetTop, offsetLeft, offsetWidth, offsetHeight })
    }
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);


  const activeCurrentLink = (e) => {
    const target = e.target;
    lastActiveLink.current?.classList.remove("active");
    target.classList.add("active");
    lastActiveLink.current = target;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;
    activeBox.current.style.top = `${offsetTop}px`;
    activeBox.current.style.left = `${offsetLeft}px`;
    activeBox.current.style.width = `${offsetWidth}px`;
    activeBox.current.style.height = `${offsetHeight}px`;

    console.log('Active Link:', target.textContent);
    console.log('New Active Box Position', {offsetTop, offsetLeft, offsetWidth, offsetHeight});
  };

  const navItems = [
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Skills", link: "#skills", className: "nav-link" },
    { label: "Projects", link: "#projects", className: "nav-link" },
    { label: "Education", link: "#education", className: "nav-link" },
    { label: "Recent", link: "#recent", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={`${className} ${key === 0 ? "active" : ""}`}
          onClick={(e) => activeCurrentLink(e)}
          ref={key === 0 ? lastActiveLink : null}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
