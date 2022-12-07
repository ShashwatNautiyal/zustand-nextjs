import "../styles/globals.css";
import type { AppProps } from "next/app";
import create from "zustand";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

interface Theme {
  mode: "light" | "dark";
  setTheme: (mode: "light" | "dark") => void;
}

export const useThemeStore = create<Theme>((set) => ({
  mode: "light",
  setTheme: (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
    set({ mode: mode });
  },
}));
