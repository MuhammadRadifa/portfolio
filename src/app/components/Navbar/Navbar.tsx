'use client'

import { useState } from 'react'
import { IconContext } from 'react-icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='flex items-center justify-between py-4 pb-2'>
      <div className='text-md font-bold text-black'>Minifolio X</div>
      <div className='hidden sm:block'>
        <ul className='flex space-x-4 text-sm text-slate-500'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        className='sm:hidden'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <IconContext.Provider value={{ style: { fontWeight: '500px' } }}>
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </IconContext.Provider>
      </div>
    </nav>
  )
}
