import { useContext } from "react";
import { AppContext } from "app/appContext";
import { AppValuesType } from "app/types";

export const useApp = () => useContext(AppContext) as AppValuesType