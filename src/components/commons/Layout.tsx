import { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { AppContext } from "../../utils/context/AppContext";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useContext(AppContext);

  const getMainClasses = () => {
    switch (theme) {
      case "theme2":
        return "bg-gray-800 text-white min-h-screen font-serif";
      case "theme3":
        return "bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 min-h-screen";
      default:
        return "bg-gray-50 text-gray-900 min-h-screen font-sans";
    }
  };

  return (
    <div className={`transition-all duration-500 ${getMainClasses()}`}>
      <Header />
      <main className="pt-16">
        {theme === "theme2" ? (
          <div className="flex">
            {/* Sidebar only visible on md and above */}
            <div className="hidden md:block">
              <Sidebar mode="static" isOpen={true} />
            </div>
            {/* Apply margin-left only on md and up */}
            <div className="w-full md:ml-64">{children}</div>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default Layout;
