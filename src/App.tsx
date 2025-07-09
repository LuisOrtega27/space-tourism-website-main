import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import MenuMain from "./components/MenuMain";

function App() {
  return (
    <main
      className={`
      bg-[url('../assets/home/background-home-mobile.jpg')] 
      md:bg-[url('../assets/home/background-home-tablet.jpg')] 
      lg:bg-[url('../assets/home/background-home-desktop.jpg')] 

      bg-cover
      bg-center
      text-white-404 
      min-h-screen
    `}
    >
      <BrowserRouter>
        <MenuMain />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
