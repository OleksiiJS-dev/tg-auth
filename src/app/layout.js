import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import React from "react";
import ThemeWrap from "./context/ThemeContext";
export default function RootLayout({ children }) {
  const theme = React.useContext;
  console.log("conole.log in devtools")
  return (
    <html lang="en">
      <ThemeWrap>
        <body className={"theme"}>{children}</body>
      </ThemeWrap>
    </html>
  );
}
