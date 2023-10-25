import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function DarkToggle({ isOpen }: any) {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      className=' mt-2 flex items-center gap-2 text-sm font-light text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-slate-50 md:text-base'
    >
      <span className='text-lg md:text-xl'>{theme == 'light' ? <MdDarkMode /> : <MdLightMode />}</span>
      {theme == 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
