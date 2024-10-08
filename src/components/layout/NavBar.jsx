import { motion } from 'framer-motion'

const NavBar = ({ sections, activeSection, setActiveSection }) => {
  return (
    <nav className='mb-8 relative z-10'>
      <ul className='flex justify-center space-x-4 flex-wrap'>
        {sections.map(section => (
          <motion.li
            key={section.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setActiveSection(section.id)}
              className={`text-xs flex items-center space-x-2 px-2 py-2 mb-6 rounded-full sm:text-sm md:text-md lg:text-lg ${
                activeSection === section.id
                  ? 'bg-amber-700 text-amber-100'
                  : 'bg-amber-200 text-amber-800'
              }`}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
