"use client"

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { useState, useEffect } from "react";
import Counter from "@/app/counter";

import * as file from "@/app/users.json";

export default function Home() {
  const [state, setState] = React.useState(0);

  useEffect(() => {
    setState(state => state + 1);
  }, [])

  return (
    <main className={styles.main}>
      <button onClick={() => setState((state) => state + 1)}>click me </button>
      <div>JavaSCript counter: {state}</div>

      <Counter></Counter>
    </main>
  );
}
