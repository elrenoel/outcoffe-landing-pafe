import { motion } from 'framer-motion';
import barista from '../../assets/barista.jpg';
import coffeeBeans from '../../assets/coffee-beans.jpg';
import cafe from '../../assets/cafe.jpg';

const Gallery = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-primary">
      <div className="w-full flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold font-heading tracking-tighter text-text-dark leading-[1.1] md:leading-tight"
          >
            Pelarian Singkat<br className="hidden md:block" /> dari Deadline.
          </motion.h2>
        </div>
        <div className="md:w-1/2 md:mt-2">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-dark/80 font-medium leading-[1.6]"
          >
            Burnout itu nyata, tapi kopi kami jauh lebih nyata. Taruh dulu laptopmu, rebahkan bahu sebentar, dan biarkan sudut estetik kami jadi tempatmu <strong className="font-bold text-text-dark">'log out'</strong> dari dunia yang lagi berisik.
          </motion.p>
        </div>
      </div>

      <div className="w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:h-150 lg:h-175 gap-4 md:gap-6">
        {/* Left large image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-4/5 md:aspect-auto md:row-span-2 rounded-[8px] overflow-hidden group bg-[#e8e8df]"
        >
          <img 
            src={barista} 
            alt="Barista OutCoffee" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            loading="lazy" 
          />
        </motion.div>

        {/* Top right image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full aspect-4/3 md:aspect-auto md:col-start-2 md:row-start-1 rounded-[8px] overflow-hidden group bg-[#e8e8df]"
        >
          <img 
            src={coffeeBeans} 
            alt="Biji Kopi Pilihan" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            loading="lazy" 
          />
        </motion.div>
        
        {/* Bottom right image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full aspect-4/3 md:aspect-auto md:col-start-2 md:row-start-2 rounded-[8px] overflow-hidden group bg-[#e8e8df]"
        >
          <img 
            src={cafe} 
            alt="Interior OutCoffee" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            loading="lazy" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
