'use client'

import { useState } from 'react'
import { IconContext } from 'react-icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import Menu from './Menu'
import DarkToggle from './DarkToggle'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='top-0 z-50 flex items-center justify-between bg-white py-4 pb-2 dark:bg-inherit dark:text-white'>
      <div className='text-md flex items-center font-bold text-black dark:text-white sm:text-xl'>
        <svg
          version='1.0'
          xmlns='http://www.w3.org/2000/svg'
          // width='50'
          // height='50'
          viewBox='0 0 500.000000 500.000000'
          preserveAspectRatio='xMidYMid meet'
          className='w-12 sm:w-14 lg:w-16'
        >
          <g
            transform='translate(0.000000,500.000000) scale(0.100000,-0.100000)'
            fill='#000000'
            className='dark:fill-white'
            stroke='none'
          >
            <path
              d='M1310 3979 c0 -6 70 -162 156 -347 86 -186 166 -358 177 -384 l20
-48 883 0 c486 0 884 3 884 8 -1 4 -81 180 -179 392 l-179 385 -881 3 c-637 1
-881 -1 -881 -9z'
            />
            <path
              d='M2586 3098 c18 -22 174 -196 348 -391 44 -48 82 -86 86 -85 4 2 72
75 151 163 78 88 178 199 222 248 l79 87 -452 0 -453 0 19 -22z'
            />
            <path
              d='M2310 3012 c-96 -54 -247 -138 -335 -187 -88 -49 -168 -94 -178 -101
-16 -10 -7 -24 95 -146 62 -74 250 -299 418 -499 167 -200 369 -440 448 -534
79 -93 175 -207 214 -253 45 -54 76 -82 87 -80 20 3 700 380 701 388 0 3 -70
88 -156 190 -192 227 -709 843 -937 1115 -92 110 -171 201 -175 203 -4 1 -86
-42 -182 -96z'
            />
            <path
              d='M1740 2618 c-11 -79 -87 -824 -85 -826 2 -2 86 -8 187 -13 101 -5
284 -16 408 -23 124 -8 226 -13 228 -11 2 2 -163 200 -367 440 -204 240 -371
435 -371 433z'
            />
          </g>
        </svg>
        <h1>My Portfolio</h1>
      </div>
      <div className='hidden w-fit sm:block'>
        <ul className='flex space-x-4 text-sm text-slate-500 sm:text-base'>
          <li>
            <a href='#project'>Project</a>
          </li>
          <li>
            <a href='#tech'>Tech</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
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
      <div className='hidden sm:block'>
        <DarkToggle isOpen={isOpen} />
      </div>
    </nav>
  )
}
