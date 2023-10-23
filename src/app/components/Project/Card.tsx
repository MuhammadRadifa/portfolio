import Image from 'next/image'
import foto from './foto1.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function Card() {
  return (
    <div className='group relative h-36 max-w-[280px] overflow-hidden rounded-lg border border-gray-200 object-cover sm:max-w-[360px] lg:h-44 lg:max-w-[440px] '>
      <Image src={foto} width={500} height={500} className='h-full w-full object-cover' alt='foto' />
      <div className='absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0'>
        <a href='#' className='cursor-pointer text-sm text-gray-400 hover:text-black lg:text-lg'>
          <FaExternalLinkAlt />
        </a>
        <a href='#' className='cursor-pointer text-gray-400 hover:text-black lg:text-lg'>
          <FaGithub />
        </a>
      </div>
      <div className='absolute bottom-0 h-10 w-full bg-gray-primary p-2 transition-all group-hover:h-3/4'>
        <div className='h-20'>
          <h1 className='mb-1 line-clamp-1 font-semibold group-hover:line-clamp-2'>Kalkulator Kesehatan</h1>
          <p className='h-full text-xs font-thin'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ut libero non dolorem delectus, reprehenderit
            expedita ducimus consequuntur dicta eum .
          </p>
        </div>
      </div>
    </div>
  )
}
