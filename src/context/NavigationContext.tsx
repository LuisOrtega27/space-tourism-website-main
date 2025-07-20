import { createContext } from "react";

export type NavigationContextType = {
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
} | null;

export const NavigationContext = createContext<NavigationContextType>(null);
