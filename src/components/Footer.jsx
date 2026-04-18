import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  const whatsappUrl =
    "https://wa.me/6281234567890?text=Halo%20OutCoffee,%20saya%20ingin%20tanya%20ketersediaan%20tempat/menu...";

  return (
    <>
      {/* Reservation CTA Section (Light Background) */}
      <section className="w-full px-4 pt-10 pb-20 md:pb-28 bg-primary">
        <div
          className="w-full flex flex-col items-center text-center"
          id="contact"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-tighter text-text-dark mb-8 leading-tight">
              mau reservasi tempat?
              <br />
              hubungi kami
            </h3>

            {/* Standout Animated Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-text-dark text-white rounded-full font-medium text-lg transition-transform duration-300 hover:scale-105"
              whileHover={{ rotate: [-2, 2, -2, 0], scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaWhatsapp
                size={24}
                className="group-hover:-scale-x-100 transition-transform duration-500"
              />
              Kontak Kami
              {/* Ping Animation behind button to make it standout */}
              <span className="absolute -inset-1 rounded-full bg-text-dark opacity-20 group-hover:animate-ping -z-10"></span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Dark Footer Section */}
      <footer className="w-full bg-[#18181b] text-white pt-20 pb-8 px-8 md:px-16  -mt-12 md:-mt-16 z-20 relative">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 mb-16">
          {/* Logo Watermark style */}
          <div className="md:w-1/3">
            <h2 className="text-6xl lg:text-[7rem] font-bold font-heading tracking-tight leading-[0.8] text-white/10 hover:text-white/20 transition-colors duration-500 cursor-default">
              Out
              <br />
              Coffee
            </h2>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 md:w-2/3 md:justify-items-end">
            {/* Pintasan */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading mb-2">Pintasan</h4>
              <NavHashLink
                smooth
                to="/#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Beranda
              </NavHashLink>
              <Link
                to="/menu"
                className="text-white/60 hover:text-white transition-colors"
              >
                Menu
              </Link>
              <NavHashLink
                smooth
                to="/#maps"
                className="text-white/60 hover:text-white transition-colors"
              >
                Temukan Kami
              </NavHashLink>
              <NavHashLink
                smooth
                to="/#contact"
                className="text-white/60 hover:text-white transition-colors"
              >
                Kontak Kami
              </NavHashLink>
              <Link
                to="/booking"
                className="text-white/60 hover:text-white transition-colors"
              >
                Booking
              </Link>
            </div>

            {/* Sosial Media */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading mb-2">
                Sosial Media
              </h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Tiktok
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>

            {/* Lokasi */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading mb-2">Lokasi</h4>
              <div className="text-white/60 space-y-2">
                <p>JL.Cempaka Putih No.25</p>
                <p>Medan, Sumatra Utara</p>
                <p className="pt-2 hover:text-white transition-colors cursor-pointer">
                  +62 812-3456-7890
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-white/10 text-center md:text-right hidden md:block">
          <p className="text-sm text-white/40">
            ©2026 copyright OutCoffee. All rights reserved.
          </p>
        </div>
        <div className="pt-8 border-t border-white/10 flex justify-center w-full md:hidden">
          <p className="text-sm text-white/40 text-center">
            ©2026 copyright OutCoffee.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
