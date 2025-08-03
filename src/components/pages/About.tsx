import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import FeatureCard from "../commons/FeatureCard";

const About: React.FC = () => {
  // store
  const { theme } = useContext(AppContext);

  const getContainerClasses = () => {
    switch (theme) {
      case "theme2":
        return "p-8 max-w-4xl mx-auto";
      case "theme3":
        return "p-8 max-w-4xl mx-auto";
      default:
        return "p-8 max-w-4xl mx-auto";
    }
  };

  const getTitleClasses = () => {
    switch (theme) {
      case "theme2":
        return "text-4xl font-bold text-yellow-400 font-serif mb-8";
      case "theme3":
        return 'text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-["Pacifico"] mb-8';
      default:
        return "text-3xl font-bold text-gray-800 mb-8";
    }
  };

  const getTextClasses = () => {
    switch (theme) {
      case "theme2":
        return "text-gray-300";
      case "theme3":
        return "text-gray-700";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className={getContainerClasses()}>
      <h1 className={getTitleClasses()}>About Our App</h1>

      <div className="space-y-6">
        <FeatureCard title="Our Mission">
          <p className={`leading-relaxed ${getTextClasses()}`}>
            We're dedicated to creating beautiful and functional web
            applications that adapt to user preferences. Our theme system
            demonstrates how modern web technologies can create engaging user
            experiences.
          </p>
        </FeatureCard>

        <FeatureCard title="Theme Features">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-bold mb-2">Theme 1 - Minimal</h3>
              <p className="text-sm">
                Clean, professional design with subtle colors
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Theme 2 - Dark</h3>
              <p className="text-sm">
                Sophisticated dark mode with sidebar navigation
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Theme 3 - Colorful</h3>
              <p className="text-sm">Vibrant, playful design with gradients</p>
            </div>
          </div>
        </FeatureCard>

        <FeatureCard title="Technical Implementation">
          <div className={`${getTextClasses()} space-y-3`}>
            <p>This application showcases advanced React patterns including:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Context API for state management</li>
              <li>TypeScript for type safety</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Component composition and reusability</li>
              <li>External API integration</li>
              <li>Theme persistence and smooth transitions</li>
            </ul>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};

export default About;
