import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home";

import Destination from "./pages/Destination";
import PlanetShowcase from "./pages/destination/PlanetShowcase";

import Crew from "./pages/Crew";

import Technology from "./pages/Technology";

import MenuMain from "./components/menu_main/MenuMain";

import PageNotFound from "./pages/PageNotFound";

export type NavContextType = {
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
};
export const NavContext = createContext();

function App() {
  const PATH_NAME = window.location.pathname;
  const [nav, setNav] = useState(PATH_NAME.split("/")[1] || "home");

  return (
    <main
      className={`
        ${nav}--background
        bg-cover
        bg-center
        min-h-screen
        `}
    >
      <BrowserRouter>
        <NavContext value={{ nav, setNav }}>
          <MenuMain />
        </NavContext>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="destination" element={<Destination />}>
            <Route index element={<PlanetShowcase />} />
            <Route path=":destiny" element={<PlanetShowcase />} />
          </Route>

          <Route path="crew" element={<Crew />} />

          <Route path="technology" element={<Technology />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
