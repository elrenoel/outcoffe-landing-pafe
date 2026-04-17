import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Beranda");

  // Handle scroll to add blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "Temukan Kami", href: "#maps" },
    { name: "Kontak Kami", href: "#contact" },
    { name: "Booking", href: "#" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
          scrolled
            ? "bg-primary/80 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full px-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="dm-sans font-heading font-bold text-4xl md:text-5xl tracking-tighter text-text-dark"
          >
            OutCoffee
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 p-1.5 rounded-full backdrop-blur-sm border border-black/5 shadow-sm">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors z-10 ${
                  activeLink === link.name
                    ? "text-white" // Active state
                    : "text-text-dark hover:bg-black/10"
                }`}
              >
                {activeLink === link.name && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-text-dark rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-dark focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} strokeWidth={2} />
          </button>
        </div>
      </nav>
      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-primary shadow-xl z-50 p-6 flex flex-col lg:hidden"
            >
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-dark bg-black/5 p-2 rounded-full hover:bg-black/10 transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-lg font-medium text-text-dark py-2 border-b border-black/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto pb-4">
                <button className="w-full btn-primary">Hubungi Kami</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
