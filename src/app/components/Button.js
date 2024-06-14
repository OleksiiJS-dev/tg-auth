import ThemeProvider from "../context/ThemeContext";
import { useContext } from "react";

export default function ReactButton() {
  const context = useContext(ThemeProvider);
  // const newContext = context.toString();
  return (
    <button onClick={() => console.log(context, ":", "context")}>
      "Button text"
      {() => {
        return context.toString();
      }}
    </button>
  );
}
