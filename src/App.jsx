import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
