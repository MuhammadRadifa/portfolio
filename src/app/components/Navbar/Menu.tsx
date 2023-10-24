import { useTheme } from 'next-themes'
import { BiCategory } from 'react-icons/bi'
import { CgMoveTask } from 'react-icons/cg'
import { IoMdContact } from 'react-icons/io'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function Menu() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='h-30 dark:border-dark-secondary dark:bg-dark-secondary absolute left-0 mt-2 w-32 -translate-x-24 rounded-md border-2 border-gray-primary bg-white p-2 '>
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
      <button
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        className=' mt-2 flex items-center gap-2 text-sm font-light text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-slate-50 '
      >
        <span className='text-lg'>{theme == 'light' ? <MdDarkMode /> : <MdLightMode />}</span>
        {theme == 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}
