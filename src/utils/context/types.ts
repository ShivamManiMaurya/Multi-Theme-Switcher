import type { AppActions } from "./actions";

export type TTheme = "theme1" | "theme2" | "theme3";
export type TPage = "home" | "about" | "contact";
export type TRoutes = "/" | "/about" | "/contact";

export interface TAppState {
  theme: TTheme;
  currentPage: string;
  isLoading: boolean;
  products: Shapes.TProduct[];
}

export interface WithAppDispatch extends TAppState {
  dispatch: React.Dispatch<AppActions>;
  setPage: (page: TPage) => void;
  setTheme: (theme: TTheme) => void;
}
