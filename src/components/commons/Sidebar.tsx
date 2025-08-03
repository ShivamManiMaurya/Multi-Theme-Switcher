import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../utils/context/AppContext";
import type { TPage, TRoutes } from "../../utils/context/types";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  mode: "overlay" | "static";
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, mode }) => {
  const { theme, setPage } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const currPage = location.pathname.replace("/", "");

  const getSidebarClasses = () => {
    const base =
      "h-screen top-0 z-40 transition-transform duration-300 p-6 flex flex-col";
    const themeClass =
      theme === "theme3"
        ? "bg-gradient-to-b from-pink-500 to-purple-600 text-white"
        : theme === "theme2"
        ? "bg-gray-900 text-white border-r border-yellow-400"
        : "bg-white text-gray-800 border-r border-gray-300";

    const staticClass = "w-64 fixed left-0 top-16";
    const overlayClass = `fixed w-64 top-0 left-0 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } shadow-lg`;

    return `${base} ${themeClass} ${
      mode === "static" ? staticClass : overlayClass
    }`;
  };

  const getNavItemClasses = (page: string) => {
    const isActive = currPage === page;
    const base = "block transition-colors cursor-pointer px-4 py-2 rounded-md";

    switch (theme) {
      case "theme2":
        return `${base} ${
          isActive
            ? "bg-yellow-400 text-gray-900"
            : "text-white hover:text-yellow-400"
        } font-bold`;
      case "theme3":
        return `${base} ${
          isActive
            ? "bg-white text-purple-600"
            : "text-white hover:text-yellow-200"
        } font-bold hover:scale-105`;
      default:
        return `${base} ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 hover:text-blue-600"
        }`;
    }
  };

  const handleRoute = (page: TPage, route: TRoutes) => {
    setPage(page);
    navigate(route);
    onClose?.();
  };

  return (
    <aside className={getSidebarClasses()}>
      {mode === "overlay" && (
        <div className="flex justify-end mb-4">
          <button onClick={onClose}>
            <X className="text-inherit" />
          </button>
        </div>
      )}
      <nav className="space-y-3 mt-3">
        <span
          className={getNavItemClasses("")}
          onClick={() => handleRoute("home", "/")}>
          🏠 Home
        </span>
        <span
          className={getNavItemClasses("about")}
          onClick={() => handleRoute("about", "/about")}>
          ℹ️ About
        </span>
        <span
          className={getNavItemClasses("contact")}
          onClick={() => handleRoute("contact", "/contact")}>
          📧 Contact
        </span>
      </nav>
    </aside>
  );
};

export default Sidebar;
