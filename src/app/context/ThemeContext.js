"use client";

import React from "react";

const ThemeProvider = React.createContext("light");

export default function ThemeWrap({ children }) {
  return <ThemeProvider.Provider>{children}</ThemeProvider.Provider>;
}
