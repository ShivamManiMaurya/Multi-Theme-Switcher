import { useContext, useState } from "react";
import { AppContext } from "../../utils/context/AppContext";
import type { TPage, TRoutes } from "../../utils/context/types";
import DarkLogo from "../../assets/logos/DarkLogo";
import ColorfulLogo from "../../assets/logos/ColorfullLogo";
import DefaultLogo from "../../assets/logos/DefaultLogo";
import { useLocation, useNavigate } from "react-router-dom";
import ThemedDropdown from "./ThemeDropdown";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar"; // <-- make sure it's imported
import ThemeLogo from "../../assets/logos/ThemeLogo";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currPage = location.pathname.replace("/", "");
  const { theme, setPage } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const getHeaderClasses = () => {
    switch (theme) {
      case "theme2":
        return "bg-gray-900 text-white border-b-2 border-yellow-400 font-serif";
      case "theme3":
        return "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg";
      default:
        return "bg-white text-gray-800 border-b border-gray-200 font-sans";
    }
  };

  const getNavClasses = (page: string) => {
    const isActive = currPage === page;
    const baseClasses =
      "px-3 py-2 rounded-md transition-all duration-300 cursor-pointer";

    switch (theme) {
      case "theme2":
        return `${baseClasses} ${
          isActive
            ? "bg-yellow-400 text-gray-900"
            : "text-yellow-400 hover:text-yellow-300"
        } font-bold`;
      case "theme3":
        return `${baseClasses} ${
          isActive
            ? "bg-white text-purple-600"
            : "text-white hover:text-yellow-200"
        } font-bold hover:scale-105`;
      default:
        return `${baseClasses} ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-600 hover:text-blue-600"
        }`;
    }
  };

  const handleRoute = (page: TPage, route: TRoutes) => {
    setPage(page);
    navigate(route);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${getHeaderClasses()}`}>
        <div
          className={`${
            theme !== "theme2" ? "max-w-7xl" : ""
          } mx-auto px-4 sm:px-4 lg:px-8`}>
          <div className="flex justify-between items-center h-16">
            <div className="flex justify-between items-center md:space-x-4 w-full">
              <div className="flex justify-between space-x-4">
                <div className="sm:block md:hidden shadow-md p-2 rounded-md">
                  <ThemeLogo
                    color={
                      theme === "theme2"
                        ? "#fdc700"
                        : theme === "theme3"
                        ? "#aa00b6"
                        : ""
                    }
                  />
                </div>

                <div
                  className="hidden md:block cursor-pointer"
                  onClick={() => handleRoute("home", "/")}>
                  {theme === "theme2" && <DarkLogo />}
                  {theme === "theme3" && <ColorfulLogo />}
                  {(theme === "theme1" || !theme) && <DefaultLogo />}
                </div>

                {/* Desktop Nav */}
                {theme !== "theme2" && (
                  <nav className="hidden md:flex space-x-2">
                    <span
                      className={getNavClasses("")}
                      onClick={() => handleRoute("home", "/")}>
                      Home
                    </span>
                    <span
                      className={getNavClasses("about")}
                      onClick={() => handleRoute("about", "/about")}>
                      About
                    </span>
                    <span
                      className={getNavClasses("contact")}
                      onClick={() => handleRoute("contact", "/contact")}>
                      Contact
                    </span>
                  </nav>
                )}
              </div>

              <div className="flex justify-end items-center space-x-0 gap-0">
                <div className="m-0 p-0">
                  <ThemedDropdown />
                </div>
                <button
                  className="md:hidden text-inherit m-0 p-0"
                  onClick={() => setMenuOpen((prev) => !prev)}>
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar as overlay for mobile */}
      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        mode="overlay"
      />
    </>
  );
};

export default Header;
