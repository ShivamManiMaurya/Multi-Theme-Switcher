import { createContext } from "react";
import type { WithAppDispatch } from "./types";
import { initialAppState } from "./reducer";

export const AppContext = createContext<WithAppDispatch>({
  ...initialAppState,
  dispatch: () => {},
  setPage: () => {},
  setTheme: () => {},
});
