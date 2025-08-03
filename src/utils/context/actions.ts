import type { TPage, TTheme } from "./types";

export const AppActions = {
  SET_THEME: "set_theme",
  SET_PAGE: "set_page",
  SET_BULK: "set_bulk", // if needed other values
} as const;

export type AppActions =
  | { type: typeof AppActions.SET_THEME; payload: TTheme }
  | { type: typeof AppActions.SET_PAGE; payload: TPage }
  | {
      type: typeof AppActions.SET_BULK;
      payload: Partial<{
        theme: TTheme;
        currentPage: string;
        products: Shapes.TProduct[];
        isLoading: boolean;
      }>;
    };
