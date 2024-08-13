import { useEffect, useState } from "react";
import Blog from "./pages/Blog/Blog";

import ThemeContext from "./context/Theme";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Blog />;
    </ThemeContext.Provider>
  );
}

export default App;
