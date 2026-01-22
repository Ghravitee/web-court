import { FaTelegram, FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/DexCourt-logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const socialLinks = [
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <FaTelegram className="w-5 h-5" />,
      href: "#",
      label: "Telegram",
    },
    {
      icon: <FaDiscord className="w-5 h-5" />,
      href: "#",
      label: "Discord",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "#",
      label: "GitHub",
    },
  ];

  return (
    <footer className=" border-t border-gray-800/50 py-12 px-6 relative z-40">
      {/* <div className="absolute inset-0 bg-cyan-600/10 blur-3xl"></div> */}
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-1 mb-4">
              <a href="/" className="">
                <img src={logo} alt="" className="size-16 " />
                {/* <span className="text-teal-300 font-bold text-lg">DexCourt</span> */}
              </a>
              <span className="text-white font-bold text-2xl">DexCourt</span>
            </div>
            <p className="text-gray-400 text-center md:text-left max-w-xs">
              Decentralized justice and dispute resolution for Web3.
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col items-center md:items-start">
            <div className="grid grid-cols-2 gap-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm py-1 hover:translate-x-1 transform "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            {" "}
            <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-3 hover:bg-cyan-400/10 rounded-lg border border-gray-700/50 hover:border-cyan-400/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {currentYear} DexCourt. All rights reserved.
            </div>

            {/* Trademark */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
