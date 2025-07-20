import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import MenuMain from "./components/menu_main/MenuMain";

import Home from "./pages/home";

import Destination from "./pages/Destination";
import PlanetShowcase from "./pages/destinationSub/PlanetShowcase";

import Crew from "./pages/Crew";
import CrewShowcase from "./pages/crewSub/CrewShowcase";

import Technology from "./pages/Technology";
import Tech from "./pages/technologySub/TechShowcase";

import PageNotFound from "./pages/PageNotFound";

import { NavigationContext } from "./context/NavigationContext";

import type { JsonDataContextType } from "./context/JsonDataContext";
import { JsonDataContext } from "./context/JsonDataContext";

const URL = `${import.meta.env.BASE_URL}data/data.json`;

function App() {
  const PATH_NAME = window.location.pathname;
  const [nav, setNav] = useState(PATH_NAME.split("/")[2] || "home");

  const [data, setData] = useState<JsonDataContextType>(null);

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
        <JsonDataContext value={data}>
          <NavigationContext value={{ nav, setNav }}>
            <MenuMain />
          </NavigationContext>

          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Home />} />

            <Route
              path={`${import.meta.env.BASE_URL}destination`}
              element={<Destination />}
            >
              <Route index element={<PlanetShowcase isDefault />} />
              <Route path=":destiny" element={<PlanetShowcase />} />
            </Route>

            <Route path={`${import.meta.env.BASE_URL}crew`} element={<Crew />}>
              <Route index element={<CrewShowcase isDefault />} />
              <Route path={":memberName"} element={<CrewShowcase />} />
            </Route>

            <Route
              path={`${import.meta.env.BASE_URL}technology`}
              element={<Technology />}
            >
              <Route index element={<Tech isDefault />} />
              <Route path=":tech" element={<Tech />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </JsonDataContext>
      </BrowserRouter>
    </main>
  );
}

export default App;
