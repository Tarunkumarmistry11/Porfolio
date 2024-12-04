// TODO: Wrap the application with the ThemeProvider to enable theme management globally.
// TODO: Add the ThemeToggle button to the layout for user interaction.
// TODO: Integrate Navbar and other sections into the App component.

import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Header />
        {/* Other components */}
      </div>
    </ThemeProvider>
  );
};

export default App;
