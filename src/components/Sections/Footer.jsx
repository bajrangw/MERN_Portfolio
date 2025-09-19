import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowUp, Code2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { containerVariants, itemVariants } from "../../utils/helper";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/bajrangw",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/bajrang-wavare-बजरंग-वावरे-27294a64",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter/X",
      icon: FiTwitter,
      url: "https://x.com/BajrangWavare",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:bajrangwavare@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "YouTube",
      icon: FiYoutube,
      url: "https://www.youtube.com/@Codewith-Bajrang",
      color: "hover:text-red-400",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animated Gradient Line
  const AnimatedGradientLine = () => (
    <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
      <motion.div
        className={`h-px bg-gradient-to-r ${
          isDarkMode
            ? "from-transparent via-blue-500 to-transparent"
            : "from-transparent via-blue-600 to-transparent"
        }`}
        initial={{ width: "0%", opacity: 0 }}
        animate={isInView ? { width: "100%", opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-0 h-px w-32 bg-gradient-to-r ${
          isDarkMode
            ? "from-blue-400 via-purple-500 to-blue-400"
            : "from-blue-500 via-purple-600 to-blue-500"
        } blur-sm`}
        animate={{
          x: ["-50", "calc(100vw + 50%)"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
            delay: 1,
          },
        }}
      />
    </div>
  );

  return (
    <footer
      ref={footerRef}
      className={`relative ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } overflow-hidden`}
    >
      {/* Animated Line */}
      <AnimatedGradientLine />

      {/* Main Footer Content */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            {/* Logo/Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 text-2xl font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-blue-500"
                >
                  <Code2 size={28} />
                </motion.div>
                <span>Bajrang Wavare</span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-md mx-auto`}
              >
                Crafting digital experiences with passion, precision, and a touch of magic.
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-2xl transition-colors ${link.color}`}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <motion.p
              variants={itemVariants}
              className="text-sm opacity-70 mb-2"
            >
              © {new Date().getFullYear()} Bajrang Wavare. All rights reserved.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className={`text-xs ${
                isDarkMode ? "text-gray-600" : "text-gray-500"
              }`}
            >
              Built with React and Framer Motion. Designed with care.
            </motion.p>

            {/* Back to Top */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex justify-center"
            >
              <motion.button
                onClick={scrollToTop}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                  transition-all duration-300 backdrop-blur-sm border 
                  ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white border-gray-700"
                      : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900 border-gray-300"
                  }`}
                whileHover={{
                  y: -4,
                  scale: 1.08,
                  boxShadow: isDarkMode
                    ? "0 0 20px rgba(59, 130, 246, 0.3)"
                    : "0 0 15px rgba(59, 130, 246, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <ArrowUp size={16} />
                <span>Back to top</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
