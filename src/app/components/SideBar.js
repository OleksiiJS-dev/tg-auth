import LogContext from "../context/LogContext";
import { useContext } from "react";

export default function SideBar() {
  const logIs = useContext(LogContext);
  return <p>{logIs ? "logged" : "not logged"}</p>;
}
