import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="w-full px-4 py-20 bg-primary flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter text-text-dark mb-6">
          Tenang....
        </h2>
        <p className="dm-sans text-3xl lg:text-4xl leading-[1.6] text-[#735C58] w-full font-medium">
          <span className="text-[#3E2723]">OutCoffee mengerti bahwa hari</span>
          mu tidak selalu harus penuh target. Kami hadir sebagai pelarian kecil,
          tempat di mana kamu bisa benar-benar melepaskan penat dan santai dulu
          di ruang yang hangat dan nyaman. Setelah rileks, barulah kami
          hidangkan kopi pilihan yang diseduh dengan hati untuk menemani momen
          berhargamu, karena bagaimanapun juga, kopi kemudian adalah penutup
          yang sempurna.
        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;
