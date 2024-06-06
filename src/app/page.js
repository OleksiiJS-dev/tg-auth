"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { useState } from "react";

export default function Home() {
  const context = React.useContext();
  return <main className={styles.main}>Tg puth, {context}</main>;
}
