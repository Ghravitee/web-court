import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  activeTab: "normal" | "dumbed-down";
  onTabChange: (tab: "normal" | "dumbed-down") => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSetActive = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Token Utility", href: "#law" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Revenue Model", href: "#revenue" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <>
      <header
        className={`py-4 px-6 fixed w-full top-0 left-0 z-50 transition-all duration-300 backdrop-blur-[20px] ${
          navBg ? "bg-Dark-Purple" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex xl:space-x-[30px] items-center font-raleway font-medium mx-auto">
            {/* Tab Switcher - Compact Version */}
            <div className="flex items-center gap-1 mr-6 p-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <button
                onClick={() => onTabChange("normal")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "normal"
                    ? "bg-cyan-500 text-white shadow-md"
                    : "text-cyan-300 hover:text-white hover:bg-cyan-500/20"
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => onTabChange("dumbed-down")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "dumbed-down"
                    ? "bg-cyan-500 text-white shadow-md"
                    : "text-cyan-300 hover:text-white hover:bg-cyan-500/20"
                }`}
              >
                Dumb it down for me
              </button>
            </div>

            {activeTab === "normal" && (
              <ul className="flex space-x-[30px] items-center">
                {menuItems.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={`transition ${
                        activeLink === href ? "text-cyan-700" : "text-white"
                      } hover:text-Purple`}
                      onClick={() => handleSetActive(href)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden w-[12rem] text-center text-sm sm:text-[1rem] font-bold px-6 rounded-2xl sm:px-[24px] py-3 sm:py-[13px] lg:flex items-center justify-center neon-hover cursor-pointer gap-3 transition-colors relative border border-cyan-400/40 bg-cyan-500/15 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_34px_rgba(34,211,238,0.6)] hover:bg-cyan-500/20"
          >
            Launch App
          </a>

          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex rounded-full bg-cyan-500/10 border border-cyan-500/20 p-0.5">
              <button
                onClick={() => {
                  onTabChange("normal");
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-1 rounded-full text-xs font-medium ${
                  activeTab === "normal"
                    ? "bg-cyan-500 text-white"
                    : "text-cyan-300"
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => {
                  onTabChange("dumbed-down");
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-2 rounded-full text-xs font-medium ${
                  activeTab === "dumbed-down"
                    ? "bg-cyan-500 text-white"
                    : "text-cyan-300"
                }`}
              >
                Dumb it down for me
              </button>
            </div>
            {/* Mobile menu toggle */}
            <button className="xl:hidden z-[60]">
              {isOpen ? (
                <FiX
                  className="dark:text-white text-black text-4xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <FiMenu
                  className="dark:text-white text-black text-4xl cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay & Slide-In Panel */}
      {isOpen && (
        <div
          className={`block xl:hidden fixed inset-0 z-20 transition-all duration-300`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`absolute z-10 sm:w-1/2 bg-white/2 backdrop-blur-2xl text-black right-0 top-14 h-screen w-[70%] transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4"></div>

            {/* Mobile Tab Switcher - Compact */}
            <div className="flex flex-col gap-4 px-6 mb-6"></div>

            <div className="flex flex-col px-6 gap-6">
              {activeTab === "normal" &&
                menuItems.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-lg uppercase tracking-widest dark:text-white text-black"
                    onClick={() => handleSetActive(href)}
                  >
                    {label}
                  </a>
                ))}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden w-[12rem] text-center text-sm sm:text-[1rem] font-bold px-6 rounded-2xl sm:px-[24px] py-3 sm:py-[13px] flex items-center justify-center neon-hover cursor-pointer gap-3 transition-colors relative border border-cyan-400/40 bg-cyan-500/15 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_34px_rgba(34,211,238,0.6)] hover:bg-cyan-500/20"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
