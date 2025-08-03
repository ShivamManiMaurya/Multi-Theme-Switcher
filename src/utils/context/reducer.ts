import { type TAppState } from "./types";
import { AppActions } from "./actions";

export const initialAppState: TAppState = {
  theme: (localStorage.getItem("theme") as TAppState["theme"]) || "theme1",
  currentPage: "home",
  isLoading: true,
  products: [],
};

export const appReducer = (state: TAppState, action: AppActions): TAppState => {
  switch (action.type) {
    case AppActions.SET_THEME:
      localStorage.setItem("theme", action.payload);
      return { ...state, theme: action.payload };
    case AppActions.SET_PAGE:
      return { ...state, currentPage: action.payload };
    case AppActions.SET_BULK:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
