import { motion } from "framer-motion";
import heroBg from "../../assets/hero-section.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[95vh] md:min-h-screen pt-21 px-4 pb-12 flex items-center justify-center">
      {/* Background with rounded corners container matching the design */}
      <div className="absolute inset-x-4 top-21 bottom-4 md:bottom-8 rounded-lg overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark Overlay for text readability (30-40% as per PRD) */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="z-10 w-full flex flex-col px-3 py-3 md:py-5 md:px-5 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-3/4 mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-7xl leading-none font-bold text-white tracking-tight mb-4 md:mb-0">
            Santai Dulu
            <br />
            Kopi Kemudian.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-md mx-auto flex flex-col items-center text-center mt-auto md:mt-20"
        >
          <p className="text-white/90 text-sm md:text-base mb-8 md:mb-10 font-medium px-4">
            Gak usah buru-buru, nikmatin waktu luangmu
            <br className="hidden md:block" /> di sudut paling tenang bareng
            racikan kita.
          </p>

          <div className="flex flex-col w-full px-8 md:px-0 space-y-3">
            <button className="w-full py-2.5 rounded-lg bg-primary text-text-dark font-medium hover:bg-white transition-colors duration-300">
              Lihat Menu
            </button>
            <button className="w-full py-2.5 rounded-lg border border-white/40 text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-colors duration-300">
              Kunjungi Kami
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
