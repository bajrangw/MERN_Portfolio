import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Code2 size={24} className="text-blue-500" />
          <span
            className={`text-lg font-normal ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >Code with Bajrang
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm uppercase tracking-wider transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`md:hidden mt-4 mx-2 rounded-2xl shadow-lg p-4 flex flex-col gap-2 ${
              isDarkMode
                ? "bg-gray-900 border border-gray-800"
                : "bg-white border border-gray-200"
            }`}
          >
            {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-sm uppercase tracking-wider text-left rounded-lg px-3 py-2 transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item}
              </motion.button>
            ))}

            {/* Theme Toggle inside Mobile Menu */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
