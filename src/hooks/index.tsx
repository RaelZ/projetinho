import { useContext } from "react";
import { HelpContext } from "../contexts/HelpContext";

export const useHelp = () => useContext(HelpContext)