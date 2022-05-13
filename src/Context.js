import { createContext, useContext } from "react";
import RootStore from "./stores/RootStore";

export const Context = createContext(RootStore);
export const ContextProvider = Context.Provider;
export const useStore = () => useContext(Context);
