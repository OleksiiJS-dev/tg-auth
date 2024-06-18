"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import ReactButton from "./components/Button";
import SideBar from "./components/SideBar";
import ThemeProvider from "./context/ThemeContext";
import { LogContextProvider } from "./context/LogContext";
import {Menu} from './components/Menu';

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <LogContextProvider>
      <ThemeProvider.Provider value={[theme, setTheme]}>
        <main className={styles.main}>
          Tg logings
          <ReactButton />
          <SideBar />
          <Menu />
        </main>
      </ThemeProvider.Provider>
    </LogContextProvider>
  );
}
