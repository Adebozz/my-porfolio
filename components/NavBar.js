import React from 'react'
import { motion } from 'framer-motion'

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}

const NavBar = () => {
  const navItems = ['Home', 'Projects', 'Skills', 'Contact']

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='flex justify-between items-center w-full absolute top-0 p-4 bg-white/70 backdrop-blur-md shadow-md z-50'
    >
      <div className='text-xl font-extrabold text-blue-600'>Adeboss</div>
      <ul className='flex gap-6 list-none'>
        {navItems.map((item, i) => (
          <motion.li
            key={item}
            custom={i}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            className='cursor-pointer text-gray-700 hover:text-blue-500 transition-colors duration-300'
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.header>
  )
}

export default NavBar
