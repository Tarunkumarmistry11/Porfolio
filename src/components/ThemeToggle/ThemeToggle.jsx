// TODO: Create a button component to toggle between light and dark themes.
// TODO: Use the custom useTheme hook to get the current theme and toggle functionality.
// TODO: Add basic styling to indicate the current theme visually.

import { useTheme } from "../../hooks/useTheme";

// Dark Mode SVG (Moon)
const DarkModeSVG = () => (
  <svg
    fill="white"
    width="35px"
    height="35px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
  >
    <path d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z"/>
    <circle cx="20" cy="4" r="4" fill="#FF0000" />
  </svg>
);

// Light Mode SVG (Sun)
const LightModeSVG = () => (
    <svg fill="#000000" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z"/>
    <g transform="rotate(-45 20 4)">
      <circle cx="20" cy="4" r="4" fill="#FF0000"/>
      <circle cx="22" cy="4" r="3.5" fill="white"/>
    </g>
  </svg>
);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 h-20 rounded-full "
    >
      {theme === "light" ? (
        <div className="flex items-center">
          <LightModeSVG />
          <span className="ml-2"></span>
        </div>
      ) : (
        <div className="flex items-center">
          <DarkModeSVG />
          <span className="ml-2"></span>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
