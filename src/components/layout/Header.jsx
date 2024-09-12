import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="text-center py-8 relative z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4 text-amber-800">Alma Dorada</h1>
      <p className="text-2xl italic">Una campaña de The Witcher TTRPG</p>
    </motion.header>
  );
}

export default Header;
