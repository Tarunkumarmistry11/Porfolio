// TODO: Wrap the application with the ThemeProvider to enable theme management globally.
// TODO: Add the ThemeToggle button to the layout for user interaction.
// TODO: Integrate Navbar and other sections into the App component.

// import React from "react";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Navbar />
        {/* Other components */}
      </div>
    </ThemeProvider>
  );
};

export default App;
