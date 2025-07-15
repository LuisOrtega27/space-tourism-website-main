import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home";

import Destination from "./pages/Destination";
import PlanetShowcase from "./pages/destination/PlanetShowcase";

import Crew from "./pages/Crew";

import Technology from "./pages/Technology";

import MenuMain from "./components/menu_main/MenuMain";

import PageNotFound from "./pages/PageNotFound";
import CrewShowcase from "./pages/crew/CrewShowcase";
import Tech from "./pages/technology/Tech";

export type NavContextType = {
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
};
export const NavContext = createContext();

export type DataContextType = {
  home: object;
  destination: object;
  crew: object;
  technology: object;
};
export const DataContext = createContext();

const URL = `../data/data.json`;

function App() {
  const PATH_NAME = window.location.pathname;
  const [nav, setNav] = useState(PATH_NAME.split("/")[1] || "home");

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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
        <DataContext value={data}>
          <NavContext value={{ nav, setNav }}>
            <MenuMain />
          </NavContext>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="destination" element={<Destination />}>
              <Route index element={<PlanetShowcase />} />
              <Route path=":destiny" element={<PlanetShowcase />} />
            </Route>

            <Route path="crew" element={<Crew />}>
              <Route index element={<CrewShowcase />} />
              <Route path={":integrant"} element={<CrewShowcase />} />
            </Route>

            {/* falta technology */}
            <Route path="technology" element={<Technology />}>
              <Route index element={<Tech />} />
              <Route path=":Tech" element={<Tech />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </DataContext>
      </BrowserRouter>
    </main>
  );
}

export default App;
