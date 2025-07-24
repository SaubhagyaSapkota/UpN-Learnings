import { createContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContexttype {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContexttype>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

// // use in App.tsx to render this components

// import { useContext } from "react";
// import ThemeContext from "./context/themeContext";

// const App = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <div>
//       <div className="bg-background-color text-text-color inline mr-10">
//         {theme}
//       </div>
//       <button className="bg-green-400 text-red-600" onClick={toggleTheme}>
//         click me
//       </button>
//     </div>
//   );
// };

// export default App;
