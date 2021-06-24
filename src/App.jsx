import Home from "./pages/Home/Home";
import { ThemesProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemesProvider>
        <Home/>
      </ThemesProvider>
    </>
  );
}

export default App;
