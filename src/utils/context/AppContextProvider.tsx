import React, { useReducer, useMemo } from "react";
import { appReducer, initialAppState } from "./reducer";
import { AppContext } from "./AppContext";
import type { TPage, TTheme } from "./types";
import { AppActions } from "./actions";

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const value = useMemo(
    () => ({
      ...state,
      dispatch,
      setPage: (page: TPage) => {
        dispatch({ type: AppActions.SET_PAGE, payload: page });
      },
      setTheme: (theme: TTheme) => {
        dispatch({ type: AppActions.SET_THEME, payload: theme });
      },
    }),
    [state]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
