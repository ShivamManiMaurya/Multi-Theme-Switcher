import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import LoadingSpinner from "../commons/LodingSpinner";
import ProductCard from "../commons/ProductCard";
import FeatureCard from "../commons/FeatureCard";

const Home: React.FC = () => {
  const { theme, isLoading, products } = useContext(AppContext);

  const getContainerClasses = () => {
    switch (theme) {
      case "theme2":
        return "p-8 max-w-7xl mx-auto";
      case "theme3":
        return "p-8 mx-auto bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 animate-gradient-move";
      default:
        return "p-8 max-w-7xl mx-auto";
    }
  };

  const getTitleClasses = () => {
    switch (theme) {
      case "theme2":
        return "text-4xl font-bold text-yellow-400 mb-6 font-serif";
      case "theme3":
        return 'text-5xl font-extrabold bg-gradient-to-r from-amber-500 via-fuchsia-600 to-teal-400 bg-clip-text text-transparent mb-6 font-["Comic_Neu"] drop-shadow-sm animate-bounce';
      default:
        return "text-3xl font-bold text-gray-800 mb-6";
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case "theme2":
        return "bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer";
      case "theme3":
        return "bg-gradient-to-r from-pink-400 via-yellow-400 to-lime-400 text-white hover:from-green-300 hover:to-purple-400 font-bold py-3 px-8 rounded-full transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-xl cursor-pointer";
      default:
        return "bg-blue-600 text-white hover:bg-blue-700 py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer";
    }
  };

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className={getTitleClasses()}>Welcome to Our Store</h1>
        <p
          className={`text-lg mb-8 ${
            theme === "theme2"
              ? "text-gray-300"
              : theme === "theme3"
              ? "text-fuchsia-700 font-medium"
              : "text-gray-600"
          }`}>
          Discover amazing products with our dynamic theme system
        </p>
        <button className={getButtonClasses()}>
          {theme === "theme3" ? "🎉 Shop Now!" : "Shop Now"}
        </button>
      </div>

      {/* Products Section */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div
          className={`grid gap-6 ${
            theme === "theme1"
              ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <FeatureCard title="Features">
          <ul className="space-y-2 list-disc list-inside">
            <li>✨ Theme persists across page reload</li>
            <li>🔄 Dynamic theme switching with subtle animations</li>
            <li>
              🌍 Demonstrates theme across multiple pages (Home, About, Contact)
            </li>
            <li>📱 Fully responsive design</li>
            <li>📡 Only one API call — no re-fetch on theme or page change</li>
            <li>💡 Lightweight UI without large libraries</li>
            <li>🧠 Type-safe development with TypeScript</li>
            <li>📦 Centralized theme management using Context API</li>
            <li>📱 Works well on all screen sizes</li>
          </ul>
        </FeatureCard>

        <FeatureCard title="Technologies">
          <ul className="space-y-2 list-disc list-inside">
            <li>⚛️ React</li>
            <li>🔷 TypeScript</li>
            <li>🌐 REST API (Fake Store API)</li>
            <li>🎨 Tailwind CSS</li>
            <li>🧩 CSS Modules / Styled-components</li>
            <li>📦 Context API </li>
            <li>🧭 React Router</li>
            <li>💾 localStorage</li>
          </ul>
        </FeatureCard>
      </div>
    </div>
  );
};

export default Home;
