import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Beranda");

  // Handle scroll to add blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scrolled state on route change to prevent transition flicker
  useEffect(() => {
    setScrolled(false);
  }, [location.pathname]);

  // Update active link based on location
  useEffect(() => {
    if (location.pathname === "/menu") {
      setActiveLink("Menu");
    } else if (location.pathname === "/booking") {
      setActiveLink("Booking");
    } else if (location.pathname === "/") {
      if (location.hash === "#maps") setActiveLink("Temukan Kami");
      else if (location.hash === "#contact") setActiveLink("Kontak Kami");
      else setActiveLink("Beranda");
    }
  }, [location]);

  const navLinks = [
    { name: "Beranda", to: "/#" },
    { name: "Menu", to: "/menu" },
    { name: "Temukan Kami", to: "/#maps" },
    { name: "Kontak Kami", to: "/#contact" },
    { name: "Booking", to: "/booking" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-[background-color,backdrop-filter,padding,box-shadow] duration-300 ease-in-out ${
          scrolled
            ? "bg-primary/80 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full px-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="dm-sans font-heading font-bold text-4xl md:text-5xl tracking-tighter text-text-dark"
          >
            OutCoffee
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 p-1.5 rounded-full backdrop-blur-sm border border-black/5 shadow-sm">
            {navLinks.map((link, index) => (
              <NavHashLink
                smooth
                key={index}
                to={link.to}
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
              </NavHashLink>
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
                  <NavHashLink
                    smooth
                    key={index}
                    to={link.to}
                    className="text-lg font-medium text-text-dark py-2 border-b border-black/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavHashLink>
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
