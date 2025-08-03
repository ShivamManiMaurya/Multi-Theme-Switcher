import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../../utils/context/AppContext";
import type { TTheme } from "../../utils/context/types";
import { useWindowSize } from "../../utils/hooks/useWindowSize";

const ThemedDropdown: React.FC = () => {
  const { theme, setTheme } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const options = [
    { value: "theme1", label: "Theme 1 - Minimal", smLabel: "Minimal" },
    { value: "theme2", label: "Theme 2 - Dark", smLabel: "Dark" },
    { value: "theme3", label: "Theme 3 - Colorful", smLabel: "Colorful" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStyles = {
    container: () => {
      switch (theme) {
        case "theme2":
          return "bg-gray-800 text-yellow-400 border-yellow-500";
        case "theme3":
          return "bg-gradient-to-r from-pink-200 via-yellow-100 to-purple-200 text-purple-800 border-pink-300 font-semibold animate-pulse";
        default:
          return "bg-white text-gray-800 border-gray-300";
      }
    },
    option: (selected: boolean) => {
      switch (theme) {
        case "theme2":
          return `w-auto px-4 py-2 cursor-pointer hover:bg-yellow-100 hover:text-gray-900 ${
            selected ? "bg-yellow-200 text-gray-900" : "text-yellow-400"
          }`;
        case "theme3":
          return `w-auto px-4 py-2 cursor-pointer hover:bg-purple-100 hover:text-pink-600 transition-all ${
            selected
              ? "bg-purple-200 text-pink-700 font-bold"
              : "text-purple-700"
          }`;
        default:
          return `px-4 py-2 cursor-pointer hover:bg-gray-100 ${
            selected ? "bg-gray-200 text-gray-800" : "text-gray-700"
          }`;
      }
    },
  };

  return (
    <div
      className="relative inline-block text-left w-28 md:w-45"
      ref={dropdownRef}>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`w-24 md:w-full border p-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-300 flex items-center justify-center ${getStyles.container()}`}>
          {options.find((opt) => opt.value === theme)?.[
            width < 640 ? "smLabel" : "label"
          ] || "Select Theme"}
        </button>
      </div>

      {open && (
        <div className="absolute z-10 mt-2 md:w-full rounded-md shadow-lg">
          <div
            className={`rounded-md overflow-hidden border ${
              theme === "theme2"
                ? "bg-gray-900 border-yellow-500"
                : theme === "theme3"
                ? "bg-white border-pink-300"
                : "bg-white border-gray-200"
            }`}>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setTheme(option.value as TTheme);
                  setOpen(false);
                }}
                className={getStyles.option(option.value === theme)}>
                {width < 640 ? option.smLabel : option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemedDropdown;
