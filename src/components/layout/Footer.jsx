import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="text-center py-4 text-amber-700 relative z-10 text-xs sm:text-sm md:text-md lg:text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <p>Deja que tu dado te guíe... y vive una aventura legendaria.</p>
    </motion.footer>
  );
}

export default Footer;
