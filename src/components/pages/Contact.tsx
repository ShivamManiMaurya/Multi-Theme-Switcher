import { useContext, useState } from "react";
import { AppContext } from "../../utils/context/AppContext";
import FeatureCard from "../commons/FeatureCard";

const Contact: React.FC = () => {
  // store
  const { theme } = useContext(AppContext);

  // states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setFormData({ name: "", email: "", message: "" });
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

  const getInputClasses = () => {
    switch (theme) {
      case "theme2":
        return "w-full px-4 py-3 bg-gray-800 border border-yellow-400 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent";
      case "theme3":
        return "w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400";
      default:
        return "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
    }
  };

  const getLabelClasses = () => {
    switch (theme) {
      case "theme2":
        return "text-yellow-400";
      case "theme3":
        return "text-purple-700";
      default:
        return "text-gray-700";
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case "theme2":
        return "w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 cursor-pointer bg-yellow-400 text-gray-900 hover:bg-yellow-300 hover:shadow-lg";
      case "theme3":
        return "w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 hover:shadow-lg transform hover:scale-105";
      default:
        return "w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 cursor-pointer bg-blue-600 text-white hover:bg-blue-700";
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className={getTitleClasses()}>Contact Us</h1>

      <FeatureCard title="Send us a message">
        <div className="space-y-6">
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${getLabelClasses()}`}>
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={getInputClasses()}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${getLabelClasses()}`}>
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={getInputClasses()}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${getLabelClasses()}`}>
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              className={getInputClasses()}
              placeholder="Enter your message"
            />
          </div>

          <button onClick={handleSubmit} className={getButtonClasses()}>
            {theme === "theme3" ? "💌 Send Message" : "Send Message"}
          </button>
        </div>
      </FeatureCard>

      {/* Contact Info */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <FeatureCard title="Get in Touch">
          <div className="space-y-3">
            <p>📧 Email: contact@themeapp.com</p>
            <p>📞 Phone: +1 (555) 123-4567</p>
            <p>📍 Address: 123 Theme Street, Design City</p>
          </div>
        </FeatureCard>

        <FeatureCard title="Follow Us">
          <div className="space-y-3">
            <p>🐦 Twitter: @themeapp</p>
            <p>📸 Instagram: @themeapp</p>
            <p>💼 LinkedIn: ThemeApp</p>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};

export default Contact;
