import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";

// Feature Card Component
const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const { theme } = useContext(AppContext);

  const getCardClasses = () => {
    switch (theme) {
      case "theme2":
        return "bg-gray-700 border border-yellow-400 text-white";
      case "theme3":
        return "bg-white border-2 border-pink-200 shadow-lg text-purple-900";
      default:
        return "bg-white border border-gray-200 shadow-md text-gray-800";
    }
  };

  const getTitleClasses = () => {
    switch (theme) {
      case "theme2":
        return "text-yellow-400";
      case "theme3":
        return "text-purple-700";
      default:
        return "text-gray-800";
    }
  };

  return (
    <div className={`p-6 rounded-lg ${getCardClasses()}`}>
      <h3 className={`text-xl font-bold mb-4 ${getTitleClasses()}`}>{title}</h3>
      <div className="text-base">{children}</div>
    </div>
  );
};

export default FeatureCard;
