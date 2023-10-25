import { BiCategory } from 'react-icons/bi'
import { CgMoveTask } from 'react-icons/cg'
import { IoMdContact } from 'react-icons/io'
import DarkToggle from './DarkToggle'

export default function Menu({ isOpen }: any) {
  return (
    <div
      className={`h-30 absolute left-0 z-50 mt-2 w-32 -translate-x-24 overflow-hidden rounded-md border-2 border-gray-primary bg-white p-2 transition-all duration-300 dark:border-dark-secondary dark:bg-dark-secondary ${
        !isOpen && 'pointer-events-none opacity-0'
      }`}
    >
      <a
        href='#project'
        className='flex cursor-pointer items-center gap-2 text-sm font-light text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-slate-50'
      >
        <span className='text-lg'>
          <BiCategory />
        </span>
        My Project{' '}
      </a>
      <a
        href='#tech'
        className='mt-2 flex cursor-pointer items-center gap-2 text-sm font-light text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-slate-50 '
      >
        <span className='text-lg'>
          <CgMoveTask />
        </span>
        Tech Stack{' '}
      </a>
      <a
        href='#contact'
        className='mt-2 flex cursor-pointer items-center gap-2 text-sm font-light text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-slate-50 '
      >
        <span className='text-lg'>
          <IoMdContact />
        </span>
        Contact{' '}
      </a>
      <DarkToggle isOpen={isOpen} />
    </div>
  )
}
