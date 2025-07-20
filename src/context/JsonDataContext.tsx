import { createContext } from "react";

export type JsonDataContextType = {
  home: {
    subTitle: string;
    title: string;
    text: string;
    button: string;
  };
  destination: Array<{
    name: string;
    images: { webp: string; png: string };
    description: string;
    distance: string;
    travel: string;
  }>;
  crew: Array<{
    name: string;
    images: { webp: string; png: string };
    role: string;
    bio: string;
  }>;
  technology: Array<{
    name: string;
    images: { portrait: string; landscape: string };
    description: string;
  }>;
} | null;

export const JsonDataContext = createContext<JsonDataContextType>(null);
