import { useContext } from "react";
import { ModContext } from "./gameModContext";

export function useModContext() {
  return useContext(ModContext);
}
