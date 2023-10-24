'use client'

import { useState } from 'react'
import { IconContext } from 'react-icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import Menu from './Menu'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='top-0 z-50 flex items-center justify-between bg-white py-4 pb-2 dark:bg-inherit dark:text-white'>
      <div className='text-md font-bold text-black dark:text-white'>My Portfolio</div>
      <div className='hidden sm:block'>
        <ul className='flex space-x-4 text-sm text-slate-500'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        className='relative cursor-pointer sm:hidden'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <IconContext.Provider value={{ style: { fontWeight: '500px' } }}>
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </IconContext.Provider>
        <Menu isOpen={isOpen} />
      </div>
    </nav>
  )
}
