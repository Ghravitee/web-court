import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
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
    { label: "Judges", href: "#judges" },
    { label: "Community", href: "#community" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "$LAW", href: "#law" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Revenue", href: "#revenue" },
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
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-white font-bold text-2xl">DexCourt</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex xl:space-x-[30px] items-center font-raleway font-medium mx-auto">
            {menuItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`transition ${
                    activeLink === href
                      ? "text-[#0C8CE0]"
                      : "dark:text-white text-black"
                  } hover:text-Purple`}
                  onClick={() => handleSetActive(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden w-[12rem] text-center text-sm sm:text-[1rem] font-bold px-6 rounded-2xl sm:px-[24px] py-3 sm:py-[13px] lg:flex items-center justify-center neon-hover cursor-pointer gap-3 transition-colors relative border border-cyan-400/40 bg-cyan-500/15 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_34px_rgba(34,211,238,0.6)] hover:bg-cyan-500/20"
          >
            Launch App
          </a>
          <div className="flex items-center gap-3">
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
          className={`block xl:hidden fixed inset-0 z-20 transition-all duration-300 `}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`absolute z-10 sm:w-1/2 bg-white/2 backdrop-blur-2xl text-black right-0 top-0 h-screen w-[70%] transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <FiX
                className="text-white text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex flex-col px-6 gap-6 mt-20">
              {menuItems.map(({ label, href }) => (
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
