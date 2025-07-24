import { useContext } from "react";
import ThemeContext from "./context/themeContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="bg-background-color text-text-color inline mr-10">
        {theme}
      </div>
      <button className="bg-green-400 text-red-600" onClick={toggleTheme}>
        click me
      </button>
    </div>
  );
};

export default App;
