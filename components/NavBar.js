import React from 'react'

const NavBar = () => {
  return (
     <header className='flex space-between w-full absolute m-0'>
        <div className='text-bold font-bold'>Adeboss</div>
        <div className='flex '>
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
        </div>
      </header>
  )
}

export default NavBar;
